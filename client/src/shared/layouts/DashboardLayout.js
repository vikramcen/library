import { userLoggedOut } from '@apis/auth/authSlice';
import { removeCart } from '@apis/cart/cartSlice';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import PageTitle from '@components/PageTitle/PageTitle';
import { ROOT_PAGE_URL } from '@constants/navigator';
import useAuth from '@hooks/useAuth';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useAuth();

  const MenuList = useMemo(() => {
    const isAdmin = role === 'admin';

    return [
      { name: 'Dashboard', url: '', icon: 'fa fa-dashboard' },
      { name: 'Orders', url: ROOT_PAGE_URL.ORDERS, icon: 'fa fa-cart-arrow-down' },
      { name: 'Account Details', url: ROOT_PAGE_URL.ACCOUNT_DETAILS, icon: 'fa fa-user' },
      isAdmin && {
        name: 'Categories',
        url: ROOT_PAGE_URL.CATEGORIES,
        icon: 'fa fa-list',
      },
      isAdmin && {
        name: 'Users',
        url: ROOT_PAGE_URL.USERS,
        icon: 'fa fa-user',
      },
      isAdmin && {
        name: 'Books',
        url: ROOT_PAGE_URL.BOOKS,
        icon: 'fa fa-book',
      },
      {
        name: 'Payment Methods',
        url: ROOT_PAGE_URL.PAYMENT_METHODS,
        icon: 'fa fa-credit-card',
      },
      isAdmin && {
        name: 'Contact Us',
        url: ROOT_PAGE_URL.CONTACTUS,
        icon: 'fa fa-envelope',
      },
    ].filter(Boolean);
  }, [role]);

  const handleLogout = () => {
    dispatch(removeCart());
    dispatch(userLoggedOut());
    navigate(ROOT_PAGE_URL.LOGIN, { replace: true });
  };

  return (
    <div>
      <Breadcrumb text={'My Account'} />
      <PageTitle title={'My Account'} />
      <div className="my-account-wrapper">
        <div className="container">
          <div className="section-bg-color">
            <div className="row">
              <div className="col-lg-12">
                {/* My Account Page Start */}
                <div className="myaccount-page-wrapper">
                  {/* My Account Tab Menu Start */}
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="myaccount-tab-menu nav" role="tablist">
                        {MenuList.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={`${ROOT_PAGE_URL.MYACCOUNT}/${item.url.slice(1)}`}
                              className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                              <i className={item.icon} />
                              {item.name}
                            </NavLink>
                          );
                        })}
                        <a onClick={handleLogout} className='hover:text-white cursor-pointer'>
                          <i className="fa fa-sign-out"></i> Logout
                        </a>
                      </div>
                    </div>
                    {/* My Account Tab Menu End */}
                    <div className="col-lg-9 col-md-8">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default DashboardLayout;
