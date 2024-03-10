import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";
import New from "./New/New";

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
          <div className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={isLinkActive("/") ? styles.active : ""}
              >
                Home
              </NavLink>
              {isLinkActive("/") && <div className={styles.indicator} />}
            </li>
            <li>
              <NavLink
                to="/glasses"
                className={isLinkActive("/glasses") ? styles.active : ""}
              >
                Glasses
              </NavLink>
              {isLinkActive("/glasses") && <div className={styles.indicator} />}
            </li>
            <li>
              <NavLink
                to="/app"
                className={isLinkActive("/app") ? styles.active : ""}
              >
                App
              </NavLink>
              {isLinkActive("/app") && <div className={styles.indicator} />}
            </li>
            <li>
              <NavLink
                to="/ally"
                className={isLinkActive("/ally") ? styles.active : ""}
              >
                Ally
              </NavLink>
              {isLinkActive("/ally") && <div className={styles.indicator} />}
            </li>
            <li>
              <NavLink
                to="/enterprise"
                className={isLinkActive("/enterprise") ? styles.active : ""}
              >
                Enterprise
              </NavLink>
              {isLinkActive("/enterprise") && (
                <div className={styles.indicator} />
              )}
            </li>
            <li>
              <NavLink
                to="/community"
                className={isLinkActive("/community") ? styles.active : ""}
              >
                Community
              </NavLink>
              {isLinkActive("/community") && (
                <div className={styles.indicator} />
              )}
            </li>
            <li>
              <NavLink
                to="/support"
                className={isLinkActive("/support") ? styles.active : ""}
              >
                Support
              </NavLink>
              {isLinkActive("/support") && <div className={styles.indicator} />}
            </li>
          </div>
          <div>
            <li>
              <NavLink
                to="/webtool"
                className={isLinkActive("/webtool") ? styles.active : ""}
              >
                Webtool
              </NavLink>
              {isLinkActive("/webtool") && <div className={styles.indicator} />}
            </li>
            <New />
          </div>
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
