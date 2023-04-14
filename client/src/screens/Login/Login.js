import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import FieldController from '@components/FieldController/FieldController';
import { ROOT_PAGE_URL } from '@constants/navigator';
import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from './useLogin';

const Login = () => {
  const { control, handleSubmit, onSubmit } = useLogin();

  return (
    <>
      <Breadcrumb text={'Login'} />
      <div className="user-login-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-title text-center mb-30">
                <h2>Login</h2>
                <p>
                  Please sign in with your email id and password.  
                  <br />
                  If you do not have an account with us, please do register.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="offset-lg-3 col-lg-6 col-md-12 col-12">
                <div className="login-form">
                  <div className="single-login">
                    <FieldController
                      control={control}
                      name="email"
                      label="Email"
                      placeholder="Email *"
                      type="email"
                    />
                  </div>
                  <div className="single-login">
                    <FieldController
                      control={control}
                      name="password"
                      label="Password *"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="single-login single-login-2">
                    <button type="submit">login</button>
                    <input
                      id="rememberme"
                      type="checkbox"
                      name="rememberme"
                      defaultValue="forever"
                    />
                    <span>Remember me</span>
                  </div>
                  <p>
                    Don’t have an account? <Link className='!text-primary' to={ROOT_PAGE_URL.REGISTER}>Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
