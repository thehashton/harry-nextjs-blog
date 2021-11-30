import React from 'react';
import { FooterWrapper } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          <div className="bio">
            <h2>Harry Ghazni</h2>
            <p>UI/Accessibility engineer and educator for making our world better through the power of the web</p>
          </div>
          <ul className="contact">
            <b>Contact</b>
            <li>Email Harry</li>
            <li>Call Harry</li>
            <li>Office hours</li>
          </ul>
          <ul className="general">
            <b>General</b>
            <li>My Mission</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Code of conduct</li>
          </ul>
        </div>
        <div className="bottom">
        <ul className="sitemap">
            <b>Sitemap</b>
            <li>Home</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>About</li>
            <li>Sitemap.xml</li>
          </ul>
        </div>
      </div>
      <p className="copyright">All rights reserved © Harry Ghazni {new Date().getFullYear()}</p>
    </FooterWrapper>
  )
}

export default Footer;