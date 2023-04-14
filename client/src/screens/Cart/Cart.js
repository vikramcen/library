import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import PageTitle from '@components/PageTitle/PageTitle';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { Link } from 'react-router-dom';
import useCart from './useCart';
import useAuth from '@hooks/useAuth';

const Cart = () => {
  const { cart, removeCart } = useCart();
  const { user } = useAuth();

  return (
    <>
      <Breadcrumb text="Cart" />
      <PageTitle title="Cart" />
      <div className="cart-main-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <div className="table-content table-responsive mb-15 border-1">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart &&
                        Object.keys(cart?.items)?.map((key, index) => {
                          return (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <a href="#">
                                  <img
                                    className="w-[80px] h-[100px] object-cover object-center mx-auto"
                                    src={`${process.env.REACT_APP_SERVER_URL}${cart?.items[key]?.item?.bookImage}`}
                                    alt="man"
                                  />
                                </a>
                              </td>
                              <td className="product-name capitalize">
                                <a href="#">{cart?.items[key]?.item?.title}</a>
                              </td>
                              <td className="product-price">
                                <span className="amount">${cart?.items[key]?.item?.price}</span>
                              </td>
                              <td className="product-quantity">
                                <input
                                  type="number"
                                  defaultValue={cart?.items[key]?.qty}
                                  disabled
                                />
                              </td>
                              <td className="product-subtotal">
                                ${cart?.items[key]?.item?.price * cart?.items[key]?.qty}
                              </td>
                              <td className="product-remove">
                                <button onClick={() => removeCart(key)}>
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      {cart && Object.keys(cart?.items).length === 0 && (
                        <tr>
                          <td className="product-thumbnail" colSpan={6}>
                            <h3 className="text-center mb-0">No item in cart</h3>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="buttons-cart mb-30">
                <ul>
                  <li>
                    <Link to={ROOT_PAGE_URL.HOME}>Continue Shopping</Link>
                  </li>
                </ul>
              </div>
              <div className="coupon">
                <h3>Coupon</h3>
                <p>Enter your coupon code if you have one.</p>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <a href="#">Apply Coupon</a>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cart_totals">
                <h2>Cart Totals</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td>
                        <span className="amount">${cart.totalPrice}</span>
                      </td>
                    </tr>
                    <tr className="shipping">
                      <th>Shipping</th>
                      <td>
                        <ul id="shipping_method">
                          <li>
                            <label> Free Shipping </label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td>
                        <strong>
                          <span className="amount">${cart.totalPrice}</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {cart && Object.keys(cart?.items).length > 0 && (
                  <div className="wc-proceed-to-checkout">
                    <Link to={user ? ROOT_PAGE_URL.CHECKOUT : ROOT_PAGE_URL.LOGIN}>
                      Proceed to Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
