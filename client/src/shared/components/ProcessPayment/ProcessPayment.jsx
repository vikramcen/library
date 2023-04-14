import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Outlet } from 'react-router-dom';

const stripePromise = loadStripe(
  'pk_test_51LRnDyH3L9RCLevZkESpMP0g8QpUthUItH3qH51rFNDUM5Gx8dBUHBOTsnlGbp5lP63sHsjWljJD4HiGQVWfroAC00Vjoh8CNG',
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Outlet />
    </Elements>
  );
};

export default ProcessPayment;
