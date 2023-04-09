import './Footer.css';
import React from 'react';
import logo from './assets/logo_github.svg';

const Footer = () => (
  <footer className="footer p-3 mt-auto bg-dark">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 col-md-4">
          <div className="row text-center">
            <a className="Footer-github" href="https://github.com/" target="blank">
              <img src={logo} className="img-fluid" alt="logo github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
