import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdjustSalary = ({ employee }) => {
  const { _id } = employee || {};
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const salary = form.salary.value;
    console.log(id, salary);

    try {
      const updatedData = { updatedSalary: salary };
      console.log(updatedData);
      const { data } = await axiosSecure.patch(
        `/users/salary/${id}`,
        updatedData
      );
      console.log(data);
      toast.success("Salary Updated Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        {/* Edit Button with Icon */}
        <button
          onClick={openModal}
          className="p-3 bg-primaryColor text-white rounded-lg hover:bg-blue-600 flex items-center"
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
                Adjust Salary
              </h2>

              {/* Form Section */}
              <form
                onSubmit={(e) => handleSubmit(e, _id)}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 text-gray-700 font-medium">
                    Updated Salary
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    name="salary"
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
    </div>
  );
};

export default AdjustSalary;
