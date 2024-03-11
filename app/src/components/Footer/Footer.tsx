import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import FB from "../../assets/icons/facebook.png";
import LI from "../../assets/icons/linkedin.png";
import Play from "../../assets/icons/play.png";
import TT from "../../assets/icons/twitter.png";

const SiteMap = () => {
  return (
    <div className={styles.sitemapContainer}>
      <section>
        <dl>
          <dt className={styles.header}>About</dt>
          <dd>Our Team</dd>
          <dd>Blog</dd>
          <dd>Careers</dd>
          <dd>Terms</dd>
        </dl>
      </section>
      <section>
        <dl>
          <dt className={styles.header}>Resources</dt>
          <dd>Why Envision Glasses?</dd>
          <dd>Press Kit</dd>
        </dl>
      </section>
      <section>
        <dl>
          <dt className={styles.header}>Products</dt>
          <dd>Envision Glasses</dd>
          <dd>Envision App</dd>
          <dd>Envision Ally</dd>
          <dd>Envision Enterprise</dd>
          <dd>Envision Shop</dd>
        </dl>
      </section>
      <section>
        <dl>
          <dt className={styles.header}>Get in Touch</dt>
          <dd>Help Center</dd>
          <dd>Join The community</dd>
          <dd>Contact us</dd>
          <dd>Distributirs</dd>
        </dl>
      </section>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <section >
      <dl className={styles.socialIconsContainer}>
        <dd>
          <img src={TT} alt="" className={styles.socialIcons} />
        </dd>
        <dd>
          <img src={FB} alt="" className={styles.socialIcons} />
        </dd>
        <dd>
          <img src={LI} alt="" className={styles.socialIcons} />
        </dd>
        <dd>
          <img src={Play} alt="" className={styles.socialIcons} />
        </dd>
      </dl>
    </section>
  );
};

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <SiteMap />
      </div>
      <div>
        <div className={styles.social}>
          <Logo />
          <SocialIcons />
        </div>
      </div>
      <div>
        <p className={styles.copyRight}>
          Copyright @ Envision 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
