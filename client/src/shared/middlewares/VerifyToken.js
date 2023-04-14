import { ROOT_PAGE_URL } from '@constants/navigator';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const VerifyToken = () => {
  const { accessToken } = useSelector((state) => state.auth || {});
  const [Component, setComponent] = useState(<></>);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(ROOT_PAGE_URL.LOGIN, { replace: true });
      return;
    }
    setComponent(<Outlet />);
  }, [accessToken]);

  return Component;
};

export default VerifyToken;
