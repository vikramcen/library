import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import FieldController from '@components/FieldController/FieldController';
import PageTitle from '@components/PageTitle/PageTitle';
import { ROOT_PAGE_URL } from '@constants/navigator';
import useAuth from '@hooks/useAuth';
import { CardElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckout from './useCheckout';

const Checkout = () => {
  const { stripeId, cart, control, handleSubmit, onSubmit } = useCheckout();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if ((cart && Object.keys(cart?.items).length === 0) || !user) {
      navigate(ROOT_PAGE_URL.HOME);
      return;
    }
    setLoading(false);
  }, [navigate, user, cart]);

  if (loading) return null;

  return (
    <>
      <Breadcrumb text="Checkout" />
      <PageTitle title="Checkout" />
      <div className="checkout-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="firstName"
                          label="First Name"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="lastName"
                          label="Last Name"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="phone"
                          label="Phone"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="country"
                          label="Country"
                          type="text"
                          placeholder="Country"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="address"
                          label="Address"
                          type="text"
                          placeholder="Address"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="city"
                          label="City"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="state"
                          label="State"
                          type="text"
                          placeholder="State"
                        />
                      </div>
                      <div className="col-lg-6">
                        <FieldController
                          control={control}
                          name="zipCode"
                          label="Zip Code"
                          type="text"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="your-order">
                      <h3>Your order</h3>
                      <div className="your-order-table table-responsive">
                        <table>
                          <thead>
                            <tr>
                              <th className="product-name">Product</th>
                              <th className="product-total">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart &&
                              Object.keys(cart?.items)?.map((key) => (
                                <tr className="cart_item">
                                  <td className="product-name">
                                    {cart?.items[key].item.title}
                                    <strong className="product-quantity">
                                      × {cart?.items[key].qty}
                                    </strong>
                                  </td>
                                  <td className="product-total">
                                    <span className="amount">${cart?.items[key].price}</span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                          <tfoot>
                            <tr className="cart-subtotal">
                              <th>Cart Subtotal</th>
                              <td>
                                <span className="amount">${cart?.totalPrice}</span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Order Total</th>
                              <td>
                                <strong>
                                  <span className="amount">${cart?.totalPrice}</span>
                                </strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="payment-method">
                        {/* Write text to fill card details */}
                        <p className="mb-1">Please insert your card details below</p>
                        <div className="border rounded-md p-3">
                          <CardElement />
                        </div>
                        <div className="order-button-payment">
                          <input type="submit" value={!stripeId ? 'Pay Now' : 'Checkout'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
