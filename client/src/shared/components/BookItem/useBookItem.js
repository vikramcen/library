import { addToCart } from '@apis/cart/cartSlice';
import useAuth from '@hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const useBookItem = (book) => {
  const dispatch = useDispatch();
  const { role } = useAuth();

  const handleAddToCard = () => {
    if (!book) return;
    if (role === 'admin') return toast.error('Admin can not add to cart');
    dispatch(addToCart({ ...book, type: 'buy' }));
    toast.success('Added to cart');
  };

  return { handleAddToCard };
};

export default useBookItem;
