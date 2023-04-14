import React from 'react';

import PaymentImage from '@images/1.png';
import { Link } from 'react-router-dom';
import { ROOT_PAGE_URL } from '@constants/navigator';

const Footer = () => {
  return (
    <>
      <div className="social-group-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title-3">
                <h3>Latest Tweets</h3>
              </div>
              <div className="twitter-content">
                <div className="twitter-icon">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div className="twitter-text">
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                    lectorum. Mirum notare quam
                  </p>
                  <a href="#">koparion</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title-3">
                <h3>Stay Connected</h3>
              </div>
              <div className="link-follow">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-flickr"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {/* footer-top-start */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-top-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to={ROOT_PAGE_URL.HOME}>home</Link>
                      </li>
                      <li>
                        <Link to={ROOT_PAGE_URL.BOOKS}>Books</Link>
                      </li>
                      <li>
                        <Link to={ROOT_PAGE_URL.CONTACTUS}>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-top-start */}
        {/* footer-bottom-start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row bt-2">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="copy-right-area">
                  <p>
                    © 2023 <strong> Library </strong> 
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="payment-img text-end">
                  <a href="#">
                    <img src={PaymentImage} alt="payment" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bottom-end */}
      </footer>
    </>
  );
};

export default Footer;
