import React from 'react';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, accessToken } = useSelector((state) => state.auth || {});

  return { user, accessToken, role: user?.role };
};

export default useAuth;
