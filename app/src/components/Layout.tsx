import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";

export const Layout = () => {
  const location = useLocation();
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div>
      <div className={styles.navBar}>
        <Logo />
        <ul>
          <li>
            <NavLink
              to="/"
              className={isLinkActive("/") ? styles.active : styles.inActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              Glasses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              Ally
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              Enterprise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comingSoon"
              className={
                isLinkActive("/comingSoon") ? styles.active : styles.inActive
              }
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uploadFile"
              className={
                isLinkActive("/uploadFile") ? styles.active : styles.inActive
              }
            >
              Webtool
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/login"
              className={
                isLinkActive("/login") ? styles.active : styles.inActive
              }
            >
              Login
            </NavLink>
          </li> */}
        </ul>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
