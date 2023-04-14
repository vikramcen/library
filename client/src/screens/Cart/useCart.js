import { removeToCart } from '@apis/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const useCart = () => {
  const cart = useSelector((state) => state.cart || {});

  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(removeToCart(id));
  };
  return { cart, removeCart };
};

export default useCart;
