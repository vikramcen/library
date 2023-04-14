import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import useBookDetail from './useBookDetail';

const BookDetail = () => {
  const { data: book, isLoading, handleAddToCard } = useBookDetail();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <Breadcrumb text={'Book Detail'} />
      <div className="product-main-area mb-70">
        <div className="container">
          <div className="product-main-area">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}${book.bookImage}`}
                  className="h-[413px] w-[322px] object-cover object-center"
                  alt="woman"
                />
              </div>
              <div className="col-lg-7 col-md-6 col-12">
                <div className="product-info-main">
                  <div className="page-title">
                    <h1>{book.title}</h1>
                  </div>
                  <div class="product-info-stock-sku mb-2">
                    <span className="!mr-1">Available:</span>
                    <div class="product-attribute">
                      <span className="!text-primary">In Stock</span>
                    </div>
                  </div>
                  <div class="product-info-stock-sku">
                    <span className="!mr-1">Category:</span>
                    <div class="product-attribute">
                      <span className="!text-primary">{book.category}</span>
                    </div>
                  </div>
                  <div className="product-info-price">
                    <div className="price-final">
                      <span>${book.price}</span>
                    </div>
                  </div>
                  <div className="product-add-form flex flex-row !space-x-3">
                    <div className="quality-button !mr-0">
                      <input className="qty" disabled type="number" defaultValue={1} />
                    </div>
                    <div>
                      <button className="text-white" onClick={handleAddToCard}>
                        Add to cart
                      </button>
                    </div>
                    {/* <div>
                      <button>Borrow</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info-area mt-80">
            {/* Nav tabs */}
            <ul className="nav">
              <li>
                <a className="active" href="#Description" data-bs-toggle="tab">
                  Description
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="Description">
                <div className="valu">
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product-main-area-end */}
    </>
  );
};

export default BookDetail;
