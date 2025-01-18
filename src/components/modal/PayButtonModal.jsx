import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const PayButtonModal = ({ salary }) => {
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);

  const handlePayModal = () => {
    console.log("Clicked");
  };
  return (
    <div className="flex items-center">
      {/* Edit Button with Icon */}
      <button
        onClick={openModal}
        className="p-3 bg-primaryColor text-white rounded-lg hover:bg-blue-600 flex items-center"
      >
        <FaEdit className="mr-2" /> Pay
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
              <p> Salary : {salary}</p>
            </h2>

            {/* Form Section */}
            <form onSubmit={handlePayModal()} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Month
                </label>
                <input
                  type="text"
                  defaultValue="month"
                  className="w-full p-2 border rounded-lg"
                  name="month"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Year
                </label>
                <input
                  type="text"
                  defaultValue="Year"
                  className="w-full p-2 border rounded-lg"
                  name="year"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-2 rounded-lg hover:bg-darkMode"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayButtonModal;
