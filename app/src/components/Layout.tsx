import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";

export const Layout = () => {
    const location = useLocation();
    const isLinkActive = (path: string) => {
      return location.pathname === path;
    };
  return (
    <div>
      <p>this is our layout</p>
      <ul>
        <li>
          <NavLink to="/" className={isLinkActive("/") ? styles.active : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comingSoon"
            className={isLinkActive("/comingSoon") ? styles.active : ""}
          >
            Page 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uploadFile"
            className={isLinkActive("/uploadFile") ? styles.active : ""}
          >
            UploadFile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            // className={isLinkActive("/comingSoon") ? styles.active : ""}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <Footer />
    </div>
  );
};
