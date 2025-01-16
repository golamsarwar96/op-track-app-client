import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Importing an Edit icon from react-icons
const WorkSheetModal = ({ workSheetInfo }) => {
  const { task, formattedTime } = workSheetInfo || {};
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    closeModal();
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-100">
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

              <h2 className="text-xl font-semibold mb-4">Edit Form</h2>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={task}
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSheetModal;
