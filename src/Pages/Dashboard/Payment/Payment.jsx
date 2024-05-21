import React from "react";
import SectionTitles from "../../../components/SectionTitles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitles
        heading={"Payment"}
        subHeading={"Please Pay to eat"}
      ></SectionTitles>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
