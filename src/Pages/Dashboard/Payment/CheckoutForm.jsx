import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [success,setSuccess]=useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setSuccess("")
      setError(error.message);
    } else {
      setError("");
      console.log("payment success", paymentMethod);
      setSuccess(paymentMethod.card.last4)
    }
  };
  return (
    <form onClick={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn mx-5 my-5 btn-primary"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      <h1 className="text-2xl text-red-500">{error}</h1>
      {success && <h1 className="text-2xl text-green-500">last {success} number card payment successfully</h1>}
    </form>
  );
};

export default CheckoutForm;