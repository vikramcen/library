import { ROOT_PAGE_URL } from '@constants/navigator';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { totalQty } = useSelector((state) => state?.cart || {});

  return (
    <div className="my-cart">
      <ul>
        <li>
          <Link to={ROOT_PAGE_URL.CART}>
            <i className="fa fa-shopping-cart" />
            My Cart
          </Link>
          {totalQty ? <span>{totalQty}</span> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default CartDropdown;
