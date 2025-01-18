import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PayButtonModal = ({ salary, id, email, name, image }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [paymentReq, setPaymentReq] = useState({
    employeeDetails: {
      name: name,
      email: email,
      image: image,
    },
    employeeId: id,
    salary: salary,
    month: "",
    year: "",
  });
  console.table(paymentReq);

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);

  const handlePay = async (e) => {
    e.preventDefault();
    console.log(paymentReq);
    //post req to db
    try {
      const { data } = await axiosSecure.post("/payment-req", paymentReq);
      console.log(data);
      toast.success("Payment Request Sent To Admin");
      // closeModal();
      // navigate("/employee-list");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center">
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
              <p>
                Pay {name} Salary : {salary}
              </p>
            </h2>

            {/* Form Section */}
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Month
                </label>
                <input
                  type="text"
                  defaultValue="month"
                  onChange={(e) =>
                    setPaymentReq((prev) => {
                      return { ...prev, month: e.target.value };
                    })
                  }
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
                  onChange={(e) =>
                    setPaymentReq((prev) => {
                      return { ...prev, year: e.target.value };
                    })
                  }
                  className="w-full p-2 border rounded-lg"
                  name="year"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                onClick={handlePay}
                type="submit"
                className="w-full bg-primaryColor text-white py-2 rounded-lg hover:bg-darkMode"
              >
                Pay {salary}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayButtonModal;
