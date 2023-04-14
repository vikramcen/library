import { useGetOrderByIdQuery } from '@apis/order/orderApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { useParams, useNavigate } from 'react-router-dom';

const useViewOrder = () => {
  const { id } = useParams();
  const { data = {} } = useGetOrderByIdQuery(id);
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(`${ROOT_PAGE_URL.MYACCOUNT}/${ROOT_PAGE_URL.ORDERS.slice(1)}`);
  };

  return { viewOrder: data, onBackClick };
};

export default useViewOrder;
