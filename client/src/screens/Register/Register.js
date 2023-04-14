import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import FieldController from '@components/FieldController/FieldController';
import React from 'react';
import useRegister from './useRegister';

const Register = () => {
  const { control, handleSubmit, onSubmit } = useRegister();

  return (
    <>
      <Breadcrumb text={'Register'} />
      <div className="user-login-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-title text-center mb-30">
                <h2>Sign Up</h2>
                <p>
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  <br />
                  inventore veritatis et quasi architecto beat
                </p>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-8 col-md-12 col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3">
                  <FieldController
                    control={control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <FieldController
                    control={control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                  <FieldController
                    control={control}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <FieldController
                    control={control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className='mt-3'>
                <button className='btn-default-outlined'>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
