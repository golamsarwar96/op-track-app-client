import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { format, parse } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { AiOutlineDelete } from "react-icons/ai";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import WorkSheetModal from "../../../../components/modal/workSheetModal";

const WorkSheet = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const { data: workSheet = [], refetch } = useQuery({
    queryKey: ["workSheet"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/work-sheet/${user?.email}`);
      return data;
    },
  });

  //task onClick handler
  const handleTask = (value) => {
    setTasks(value);
    console.log(value);
  };

  //Work sheet form
  const handleWorkSheet = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task = tasks;

    //formatting date using date-fns
    const date = startDate;
    const dateSeparated = date.toDateString();
    const parsedDate = parse(dateSeparated, "EEE MMM dd yyyy", new Date());
    const postedDate = format(parsedDate, "MM/dd/yy");
    console.log(postedDate);
    const hours_worked = form.hours_worked.value;

    const workSheetInfo = {
      task,
      hours_worked,
      postedDate,
      email: user?.email,
      name: user?.displayName,
    };
    console.log(workSheetInfo);

    //post request to db
    try {
      await axiosSecure.post("/work-sheet", workSheetInfo);
      toast.success("Task Added Successfully");
      refetch();
    } catch (err) {
      toast.error("Failed to add Task");
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await axiosSecure.delete(`/work-sheet/${_id}`);

      if (response.data.deletedCount > 0) {
        toast.success("Query deleted successfully!");
        refetch(); // Ensure data updates dynamically after deletion
      } else {
        toast.error("Failed to delete the query.");
      }
    } catch (error) {
      console.error("Error deleting query:", error);
      toast.error("An error occurred while deleting the query.");
    }
  };

  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Work <span className="text-darkMode">Sheet</span>
      </h1>
      {/* Task Menu */}
      <div className="mt-10 flex justify-center lg:gap-10">
        <form
          onSubmit={handleWorkSheet}
          className="flex justify-center items-center gap-20"
        >
          <div>
            <Dropdown
              label={tasks ? tasks : "Select Task"}
              defaultValue={tasks}
              className="text-white"
            >
              <Dropdown.Item onClick={() => handleTask("Sales")}>
                Sales
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTask("Support")}>
                Support
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTask("Content")}>
                Content
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTask("Paper Work")}>
                Paper Work
              </Dropdown.Item>
            </Dropdown>
          </div>
          <input
            type="text"
            placeholder="Hours Worked"
            name="hours_worked"
            required
          />
          <DatePicker
            dateFormat="Pp"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <input
            type="submit"
            value="Submit"
            className="btn px-7 py-2 bg-primaryColor text-white rounded-3xl cursor-pointer"
          ></input>
        </form>
      </div>
      {/* Table Content */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Task Type</Table.HeadCell>
              <Table.HeadCell>Hours Worked</Table.HeadCell>
              <Table.HeadCell>Submitted</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {workSheet.map((workSheet) => (
                <Table.Row
                  key={workSheet._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {workSheet.task}
                  </Table.Cell>
                  <Table.Cell>{workSheet.hours_worked}</Table.Cell>
                  <Table.Cell>{workSheet.postedDate}</Table.Cell>
                  <Table.Cell>
                    <button onClick={() => handleDelete(workSheet._id)}>
                      <AiOutlineDelete className="text-2xl text-red-700" />
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <WorkSheetModal
                      workSheet={workSheet}
                      refetch={refetch}
                    ></WorkSheetModal>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
