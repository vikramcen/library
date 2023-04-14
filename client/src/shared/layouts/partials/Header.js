import { ROOT_PAGE_URL } from '@constants/navigator';
import mainLogo from './logo1.png';
//import mainLogo from '@images/logo1.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import CartDropdown from './CartDropdown';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
  // get keyword from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const keyword = urlParams.get('keyword');
  const [search, setSearch] = useState(keyword || '');
  const navigate = useNavigate();

  const onClickSearch = () => {
    if (search) {
      navigate(`${ROOT_PAGE_URL.BOOKS}?keyword=${search}`);
    }else{
      navigate(`${ROOT_PAGE_URL.BOOKS}`);
    }
  };

  return (
    <header>
      <Topbar />
      <div className="header-mid-area py-4 ptb-40">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-3 col-md-5 col-12">
              <div className="header-search">
                <form action="#">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search entire store here..."
                  />
                  <button type="button" onClick={onClickSearch}>
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-12">
              <div className="logo-area text-center logo-xs-mrg flex items-center justify-center">
                <Link to={'/'}>
                  <img src={mainLogo} />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <CartDropdown />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
