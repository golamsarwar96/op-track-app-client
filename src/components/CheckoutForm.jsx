// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = ({ setDate, date, employee, closeModal }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    getPaymentIntent();
  }, []);

  console.log(clientSecret);
  console.log(payment / 100);

  const getPaymentIntent = async () => {
    const updatedInfo = {
      employeeId: employee?.employeeId,
    };
    console.log(updatedInfo);
    try {
      const { data } = await axiosSecure.post(
        "/create-payment-intent",
        updatedInfo
      );
      setClientSecret(data.clientSecret);
      setPayment(data.salaryToCent);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const { salary } = employee || {};
  console.log(salary);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    //Confirm Payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      toast.success("Payment successful");
      const payment = {
        amount: paymentIntent.amount / 100,
        trans_id: paymentIntent.id,
        month: paymentIntent.created,
        date: date,
        email: employee?.employeeDetails?.email,
      };
      setDate("");
      console.log(payment);
      try {
        const { data } = await axiosSecure.post("/payment", payment);
        console.log(data);
      } catch (err) {
        console.log(err);
        toast.error("Payment Error");
      }
    }

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-primaryColor text-white py-2 rounded-lg hover:bg-darkMode"
          disabled={!stripe}
        >
          Pay ${salary}
        </button>
        <button
          className="w-full bg-primaryColor text-white py-2 rounded-lg hover:bg-darkMode"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
