import React from "react";
import auth from "../../utils/auth";

export default function Nav() {

  return (
      <nav className="navbar navbar-expand-lg nav-hide">
        <div className="nav-links mx-3">
          <ul className="navbar-nav d-mob-none">
            <li className="nav-item mx-2 width-max">
              <a href="/">HOME</a>
            </li>
            <li className="nav-item mx-2 width-max">
              <a href="/catalog">CATALOG</a>
            </li>
          </ul>
        </div>
        <div className="login-container d-mob-none">
          {
            auth.loggedIn()
            ?
            <button 
            type="button" 
            className="btn btn-danger btn-lg mx-2"
            onClick={auth.logout}>LOGOUT</button>
            :
            <div className="d-flex">
              <a href="/register"
              className="btn btn-primary mx-2" >REGISTER</a>
              <a href="/login"
              className="btn btn-success mx-2" >LOGIN</a>
            </div>
          }
        </div>
      </nav>
  );
};