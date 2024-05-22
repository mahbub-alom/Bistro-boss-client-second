import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { users } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cart] = useCart();
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalAmount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        // console.log(res.data.clientSecret);
      });
  }, [axiosSecure, totalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    //create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);

      setError(error.message);
    } else {
      setError("");
      console.log("payment success", paymentMethod);
    }

    //confirm payment method
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: users?.email || "anonymous",
            name: users?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
      setError(confirmError.message);
    } else {
      console.log("confirm intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
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
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <div>
        <p className="text-2xl text-red-500">{error}</p>
        {transactionId && (
          <p className="text-2xl text-green-500">
            Your Transaction id is: {transactionId}
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
