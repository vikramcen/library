import { useGetBookQuery } from '@apis/book/bookApi';
import { addToCart } from '@apis/cart/cartSlice';
import useAuth from '@hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const useBookDetail = () => {
  const { id } = useParams();
  const { data = {}, isLoading } = useGetBookQuery(id);
  const dispatch = useDispatch();
  const { role } = useAuth();

  const handleAddToCard = () => {
    if (!data) return;
    if (role === 'admin') return toast.error('Admin can not add to cart');
    toast.success('Added to cart');
    dispatch(addToCart({ ...data, type: 'buy' }));
  };

  return { data, isLoading, handleAddToCard };
};

export default useBookDetail;
