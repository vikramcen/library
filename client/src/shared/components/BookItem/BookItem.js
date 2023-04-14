import { ROOT_PAGE_URL } from '@constants/navigator';
import { Link } from 'react-router-dom';
import useBookItem from './useBookItem';

const BookItem = ({ book, size = 'lg' }) => {
  const { handleAddToCard } = useBookItem(book);

  return (
    <div className="product-wrapper mb-40">
      <div className="product-img">
        <Link to={`${ROOT_PAGE_URL.BOOK_DETAIL}/${book._id}`}>
          <img
            src={`${process.env.REACT_APP_SERVER_URL}${book?.bookImage}`}
            alt="book"
            className="primary h-[284px] w-full object-cover object-center"
            style={{
              height: size === 'lg' ? '284px' : '246px',
            }}
          />
        </Link>
      </div>
      <div className="product-details text-center">
        <h4>
          <a href="#">{book?.title}</a>
        </h4>
        <div className="product-price">
          <ul>
            <li>${book?.price}</li>
          </ul>
        </div>
      </div>
      <div className="product-link">
        <div className="product-button">
          <button onClick={handleAddToCard} title="Add to cart">
            <i className="fa fa-shopping-cart"></i>Add to cart
          </button>
        </div>
        <div className="add-to-link">
          <ul>
            <li>
              <Link to={`${ROOT_PAGE_URL.BOOK_DETAIL}/${book._id}`} title="Details">
                <i className="fa fa-external-link"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
