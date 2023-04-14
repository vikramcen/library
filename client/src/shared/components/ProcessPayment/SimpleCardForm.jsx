import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const SimpleCardForm = ({ handlePayment }) => {
  const [paymentSuccess, setPaymentSuccess] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  // const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="border py-2 px-4 rounded">
          <CardElement />
        </div>
        <div className="mt-4">
          <button className="rounded-md" type="submit-hover">
            Checkout
          </button>
        </div>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your payment was successful.</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
