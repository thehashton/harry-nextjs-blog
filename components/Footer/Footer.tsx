import Link from 'next/link';
import React from 'react';
import { MenuUnderline } from '../Header/Header.styled';
import { FooterWrapper } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          <div className="bio">
            <h2>Harry Ashton</h2>
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
            <li><Link href="/MyMission">My Mission</Link><MenuUnderline /></li>
            <li><Link href="/PrivacyPolicy">Privacy policy</Link><MenuUnderline /></li>
            <li><Link href="/Terms">Terms of use</Link><MenuUnderline /></li>
            <li><Link href="/CodeOfConduct">Code of conduct</Link><MenuUnderline /></li>
          </ul>
        </div>
        <div className="bottom">
        <ul className="sitemap">
            <b>Sitemap</b>
            <li><Link href="/">Home</Link><MenuUnderline /></li>
            <li><Link href="/Courses">Courses</Link><MenuUnderline /></li>
            <li><Link href="/Blog">Blog</Link><MenuUnderline /></li>
            <li><Link href="/About">About</Link><MenuUnderline /></li>
            <li><Link href="/Sitemap">Sitemap.xml</Link><MenuUnderline /></li>
          </ul>
        </div>
      </div>
      <p className="copyright">All rights reserved © Harry Ghazni {new Date().getFullYear()}</p>
    </FooterWrapper>
  )
}

export default Footer;