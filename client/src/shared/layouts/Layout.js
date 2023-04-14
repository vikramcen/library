import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './partials/Footer';
import Header from './partials/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 389px)' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
