import useAuth from '@hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const IsAdmin = () => {
  const { role } = useAuth();
  const [Component, setComponent] = useState(<></>);

  useEffect(() => {
    if (role !== 'admin') {
      setComponent(<h1>Access denied</h1>);
    } else {
      setComponent(<Outlet />);
    }
  }, [role]);

  return Component;
};

export default IsAdmin;
