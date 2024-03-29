import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">BellaH</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://linkedin.com/in/bellah-ellam-44b464115" className="footer__social-icon" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/bellahellam" className="footer__social-icon" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://twitter.com/bellah_ellam" className="footer__social-icon" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; BellaH. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
