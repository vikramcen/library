import { ROOT_PAGE_URL } from '@constants/navigator';
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ text }) => {
  return (
    <div className="breadcrumbs-area mb-11">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs-menu">
              <ul>
                <li>
                  <Link to={ROOT_PAGE_URL.HOME}>Home</Link>
                </li>
                <li>
                  <a href="#" className="active">
                    {text}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
