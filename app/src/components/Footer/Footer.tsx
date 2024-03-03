import React from 'react'
import styles from "./Footer.module.css";
import Logo from '../Logo/Logo';
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
}

const SocialIcons = () => {
  return <dd>Social icons</dd>
}

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
      <div><p className={styles.copyRight}>Copyright @ Envision 2022. All rights reserved.</p></div>
    </div>
  );
}

export default Footer
