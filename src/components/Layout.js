import React from "react";
import { Outlet } from "react-router-dom";
import LayoutNavbar from "./LayoutNavbar";
import LayoutFooter from "./LayoutFooter";

const Layout = () => {
  return (
    <>
      <LayoutNavbar />
      <Outlet />
      <LayoutFooter />
    </>
  );
};

export default Layout;
