import { removeCart } from '@apis/cart/cartSlice';
import { useCreateOrderMutation } from '@apis/order/orderApi';
import { useGetPaymentQuery } from '@apis/payment/paymentApi';
import { useGetUserQuery } from '@apis/user/userApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { yupResolver } from '@hookform/resolvers/yup';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import yup from '@utils/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useCheckout = () => {
  const cart = useSelector((state) => state.cart || {});
  const [create, { data }] = useCreateOrderMutation();
  const [stripeId, setStripeId] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  // get user details
  const { data: user } = useGetUserQuery();

  // get Payemtn details
  const { data: paymentDetails } = useGetPaymentQuery();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      totalPrice: 0,
      totalQty: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (paymentDetails) {
      console.log('====================================');
      console.log(paymentDetails);
      console.log('====================================');
    }
  }, [paymentDetails]);

  // handle payment
  const handlePaymentSuccess = ({ id: stripeToken, type }) => {
    if (stripeToken && type) {
      if (stripeToken) {
        setStripeId(stripeToken);
      }
    }
  };

  useEffect(() => {
    if (user?._id) {
      reset(user);
    }
  }, [user]);

  useEffect(() => {
    if (data?._id) {
      toast.success('Order created successfully');
      localStorage.removeItem('cart');
      dispatch(removeCart());
      navigate(ROOT_PAGE_URL.MYACCOUNT);
    }
  }, [data]);

  const onSubmit = (data) => {
    if (!stripeId) {
      handleCardPayment();
      return;
    }
    data.order = cart;
    data.stripeToken = stripeId;
    data.totalPrice = cart?.totalPrice;
    data.totalQty = cart?.totalQty;
    data.books = cart?.items;
    create(data);
  };

  // Stripe Payemtn

  const handleCardPayment = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(error.message);
    } else {
      handlePaymentSuccess(paymentMethod);
    }
  };

  return { cart, control, handleSubmit, onSubmit, handlePaymentSuccess, stripeId };
};

export default useCheckout;
