import React from "react";
import imageSRC from "../../../assets/images/popkorn.png";
import "./Footer.scss";
import CustomLink from "../../widgets/Link";
import { useProvider } from "../../../hook/useProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  const { user } = useProvider();
  const HelloCommponent = styled.h2`
    margin-top: 1rem;
    font-family: "Source Sans 3", sans-serif;

    span {
      color: rgb(1, 180, 228);
    }
  `;
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__inner">
          <div className="footer__app">
            <h3 className="footer__app-title">Download Our App</h3>
            <div className="footer__app-logo">
              <CustomLink
                to="https://play.google.com/store/apps/details?id=com.plexapp.android&hl=ru&gl=US"
                target="_blank"
                className="footer__app-subtitle logo"
              >
                <img className="footer__app-logoico" src={imageSRC} alt="" />M
                <span className="logo-letter">oo</span>vie
              </CustomLink>
            </div>
            {user ? (
              <Link to={`/account/${user.name}`}>
                <HelloCommponent>
                  Hello <span>{user.name}</span>
                </HelloCommponent>
              </Link>
            ) : (
              ""
            )}
          </div>
          <nav className="footer__menu">
            <div className="footer__menu-block">
              <h3 className="footer__menu-title">Navigation</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <CustomLink to="/" className="footer__menu-link">
                    Home
                  </CustomLink>
                </li>
                <li className="footer__menu-item">
                  <CustomLink to="/list" className="footer__menu-link">
                    My list
                  </CustomLink>
                </li>
                <li className="footer__menu-item">
                  <CustomLink to="/about" className="footer__menu-link">
                    About us
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="footer__menu-block">
              <h3 className="footer__menu-title">Legal</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <CustomLink to="/" className="footer__menu-link">
                    General Info
                  </CustomLink>
                </li>
                <li className="footer__menu-item">
                  <CustomLink to="/list" className="footer__menu-link">
                    Privacy Policy
                  </CustomLink>
                </li>
                <li className="footer__menu-item">
                  <CustomLink to="/about" className="footer__menu-link">
                    Tearms of Service
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="footer__menu-block">
              <h3 className="footer__menu-title">Contact Us</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a
                    className="footer__menu-link"
                    href="https://accounts.google.com/"
                    target="_blank"
                  >
                    support@gmail.com
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="tel:+2010459632">
                    +2010459632
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__menu-block">
              <h3 className="footer__menu-title">Share Website Via:</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a
                    className="footer__menu-link footer__menu-link_icon footer__menu-link_facebook"
                    href="https://www.facebook.com/"
                  >
                    Facebook
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a
                    className="footer__menu-link footer__menu-link_icon footer__menu-link_instagram"
                    href="https://www.instagram.com/"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
