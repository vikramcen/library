import { userLoggedIn } from '@apis/auth/authSlice';
import { addCartData } from '@apis/cart/cartSlice';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import AppRoutes from '@routes/routes';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const localAuth = localStorage?.getItem('auth');

  const cartData = localStorage?.getItem('cart');

  if (cartData) {
    const cart = JSON.parse(cartData);
    if (cart?.totalQty) {
      dispatch(addCartData(cart));
    }
  }

  if (localAuth) {
    const auth = JSON.parse(localAuth);
    if (auth?.accessToken && auth?.user) {
      dispatch(userLoggedIn({ accessToken: auth.accessToken, user: auth.user }));
    }
  }

  return (
    <div>
      <ScrollToTop>
        <AppRoutes />
      </ScrollToTop>
      <Toaster />
    </div>
  );
};

export default App;
