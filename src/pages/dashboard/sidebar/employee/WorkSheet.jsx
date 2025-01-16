import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { format, parse } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkSheet = () => {
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  //task onClick handler
  const handleTask = (value) => {
    setTasks(value);
    console.log(value);
  };

  //Work sheet form
  const handleWorkSheet = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = tasks;

    //formatting date using date-fns
    const date = startDate;
    const dateSeparated = date.toDateString();
    const parsedDate = parse(dateSeparated, "EEE MMM dd yyyy", new Date());
    const formattedDate = format(parsedDate, "MM/dd/yy");
    console.log(formattedDate);
    const hours_worked = form.hours_worked.value;

    const workSheet = {
      task,
      hours_worked,
      formattedDate,
    };
    console.log(workSheet);
  };
  return (
    <div className="p-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor">
        Work <span className="text-darkMode">Sheet</span>
      </h1>
      <div className="mt-10 flex  gap-10">
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
            className="btn px-7 py-2 bg-primaryColor text-white rounded-3xl "
          ></input>
        </form>
      </div>
    </div>
  );
};

export default WorkSheet;
