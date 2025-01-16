import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa"; // Importing an Edit icon from react-icons
import useAxiosSecure from "../../hooks/useAxiosSecure";
const WorkSheetModal = ({ workSheet, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { task, hours_worked, formattedDate, email, _id } = workSheet || {};
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e, _id) => {
    e.preventDefault();
    const modalForm = e.target;
    const updated_task = modalForm.updated_task.value;
    const updated_hours_worked = modalForm.updated_hours_worked.value;
    const updated_date = modalForm.updated_date.value;

    console.log(updated_task, updated_hours_worked, updated_date);
    const updatedInfo = {
      task: updated_task,
      hours_worked: updated_hours_worked,
      formattedDate: updated_date,
      email,
    };

    try {
      const { data } = await axiosSecure.put(
        `/update-query/${_id}`,
        updatedInfo
      );
      console.log(data);
      toast.success("Updated Successfully");
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
    closeModal();
    refetch();
  };

  return (
    <div className="flex items-center">
      {/* Edit Button with Icon */}
      <button
        onClick={openModal}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
      >
        <FaEdit className="mr-2" /> Edit
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="text-gray-700 float-right text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl text-center font-semibold mb-4">
              Edit Form
            </h2>

            {/* Form Section */}
            <form onSubmit={(e) => handleSubmit(e, _id)} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Task Type
                </label>
                <input
                  type="text"
                  defaultValue={task}
                  className="w-full p-2 border rounded-lg"
                  name="updated_task"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Hours Worked
                </label>
                <input
                  type="text"
                  defaultValue={hours_worked}
                  className="w-full p-2 border rounded-lg"
                  name="updated_hours_worked"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Date
                </label>
                <input
                  type="text"
                  defaultValue={formattedDate}
                  className="w-full p-2 border rounded-lg"
                  name="updated_date"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-2 rounded-lg hover:bg-darkMode"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSheetModal;
