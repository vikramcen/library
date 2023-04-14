import ProcessPayment from '@components/ProcessPayment/ProcessPayment';
import { ROOT_PAGE_URL } from '@constants/navigator';
import DashboardLayout from '@layouts/DashboardLayout';
import { Layout } from '@layouts/Layout';
import IsAdmin from '@middlewares/IsAdmin';
import RedirectIfAuthenticated from '@middlewares/RedirectIfAuthenticated';
import VerifyToken from '@middlewares/VerifyToken';
import BookDetail from '@screens/BookDetail/BookDetail';
import Cart from '@screens/Cart/Cart';
import Checkout from '@screens/Checkout/Checkout';
import ContactUs from '@screens/ContactUs/ContactUs';
import AccountDetails from '@screens/Dashboard/AccountDetails/AccountDetails';
import BooksList from '@screens/Dashboard/Admin/Books/BooksList/BooksList';
import PostBooks from '@screens/Dashboard/Admin/Books/PostBooks/PostBooks';
import CategoriesList from '@screens/Dashboard/Admin/Categories/CategoriesList/CategoriesList';
import PostCategory from '@screens/Dashboard/Admin/Categories/PostCategory/PostCategory';
import Users from '@screens/Dashboard/Admin/Users/Users';
import ContactUsEnquiries from '@screens/Dashboard/ContactUsEnquiries/ContactUsEnquiries';
import MyAccount from '@screens/Dashboard/MyAccount/MyAccount';
import PaymentMethod from '@screens/Dashboard/PaymentMethod/PaymentMethod';
import OrdersList from '@screens/Dashboard/Orders/OrderList';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import PublicBooks from '@screens/PublicBooks/PublicBooks';
import Register from '@screens/Register/Register';
import { useRoutes } from 'react-router-dom';
import ViewOrder from '@screens/Dashboard/Orders/ViewOrder/ViewOrder';

const AppRoutes = () => {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: ROOT_PAGE_URL.HOME,
          element: <Home />,
        },
        {
          path: ROOT_PAGE_URL.CART,
          element: <Cart />,
        },
        {
          path: ROOT_PAGE_URL.CHECKOUT,
          element: <ProcessPayment />,
          children: [
            {
              path: '',
              element: <Checkout />,
            },
          ],
        },
        {
          path: ROOT_PAGE_URL.CONTACTUS,
          element: <ContactUs />,
        },
        {
          path: ROOT_PAGE_URL.BOOKS,
          element: <PublicBooks />,
        },
        {
          path: `${ROOT_PAGE_URL.BOOK_DETAIL}/:id`,
          element: <BookDetail />,
        },

        {
          path: '',
          element: <RedirectIfAuthenticated />,
          children: [
            { path: ROOT_PAGE_URL.LOGIN, element: <Login /> },
            {
              path: ROOT_PAGE_URL.REGISTER,
              element: <Register />,
            },
          ],
        },

        {
          path: '',
          element: <VerifyToken />,
          children: [
            {
              path: ROOT_PAGE_URL.MYACCOUNT,
              element: <DashboardLayout />,
              children: [
                {
                  path: '',
                  element: <MyAccount />,
                },
                {
                  path: ROOT_PAGE_URL.ORDERS.slice(1),
                  children: [
                    { path: '', element: <OrdersList /> },
                    { path: 'view/:id', element: <ViewOrder /> },
                  ],
                },
                {
                  path: ROOT_PAGE_URL.ACCOUNT_DETAILS.slice(1),
                  element: <AccountDetails />,
                },
                {
                  path: ROOT_PAGE_URL.PAYMENT_METHODS.slice(1),
                  element: <PaymentMethod />,
                },
                {
                  path: '',
                  element: <IsAdmin />,
                  children: [
                    {
                      path: ROOT_PAGE_URL.CATEGORIES.slice(1),
                      children: [
                        {
                          path: '',
                          element: <CategoriesList />,
                        },
                        {
                          path: 'post/:id?',
                          element: <PostCategory />,
                        },
                      ],
                    },
                    {
                      path: ROOT_PAGE_URL.BOOKS.slice(1),
                      children: [
                        {
                          path: '',
                          element: <BooksList />,
                        },
                        {
                          path: 'post/:id?',
                          element: <PostBooks />,
                        },
                      ],
                    },
                    {
                      path: ROOT_PAGE_URL.USERS.slice(1),
                      element: <Users />,
                    },
                    {
                      path: ROOT_PAGE_URL.CONTACTUS.slice(1),
                      element: <ContactUsEnquiries />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
};

export default AppRoutes;
