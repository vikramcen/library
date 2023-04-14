import { ROOT_PAGE_URL } from '@constants/navigator';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

const RedirectIfAuthenticated = () => {
  const [Component, setComponent] = useState(<></>);
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth || {});

  useEffect(() => {
    if (accessToken) {
      navigate(ROOT_PAGE_URL.MYACCOUNT);
    } else {
      setComponent(<Outlet />);
    }
  }, [accessToken]);

  return Component;
};

export default RedirectIfAuthenticated;
