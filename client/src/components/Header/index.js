import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav';

export default function Header() {
  return (
    <header className="header d-flex justify-content-between px-4 align-items-center ">
      <div className="logo-container d-flex ">
        <a href="/">
          <img src="/logo1.png" alt="" style={{height: '60px'}}/>
        </a>
      </div>
      <Nav />
    </header>
  )
}