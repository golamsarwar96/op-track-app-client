import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const PaymentModal = ({ employee, date, setDate }) => {
  const { salary } = employee || {};
  const [isOpen, setIsOpen] = useState(false);

  // Open modal handler
  const openModal = () => setIsOpen(true);

  // Close modal handler
  const closeModal = () => setIsOpen(false);
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
              <p>Payment Date : {date}</p>
            </h2>

            {/* Form Section */}
            <form className="space-y-4">
              {/* Check Out Form */}
              <Elements stripe={stripePromise}>
                {/* Form Component */}
                <CheckoutForm
                  setDate={setDate}
                  date={date}
                  employee={employee}
                  closeModal={closeModal}
                ></CheckoutForm>
              </Elements>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
