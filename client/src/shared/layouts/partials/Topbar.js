import { ROOT_PAGE_URL } from '@constants/navigator';
import useAuth from '@hooks/useAuth';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const { user } = useAuth();

  return (
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12"></div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="account-area text-end">
              <ul>
                {user?._id ? (
                  <li>
                    <Link to={ROOT_PAGE_URL.MYACCOUNT}>My Account</Link>
                  </li>
                ) : (
                  <li>
                    <Link to={ROOT_PAGE_URL.LOGIN}>Sign in</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
