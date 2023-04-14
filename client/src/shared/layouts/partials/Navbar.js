import { ROOT_PAGE_URL } from '@constants/navigator';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="menu-area"></div>
            <div className='space-x-3'>
              <NavLink
                className={({ isActive }) => `safe-area text-white ${isActive ? 'active' : ''}`}
                to={ROOT_PAGE_URL.HOME}
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `safe-area text-white ${isActive ? 'active' : ''}`}
                to={ROOT_PAGE_URL.BOOKS}
              >
                <span>Books</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `safe-area text-white ${isActive ? 'active' : ''}`}
                to={ROOT_PAGE_URL.CONTACTUS}
              >
                <span>Contact Us</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
