import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__logo">
                    <span></span>
                    <p>Copyright © 2020 .</p>
                </div>
                <div className="footer__about">
                    <h5>About</h5>
                    <span></span>
                    <p>
                        Has anyone ever experienced an issue where they can’t
                        apply padding-top or padding-bottom to a link or even
                        just text? Padding-left and padding-right work just fine
                    </p>
                </div>
                <div className="footer__Contact">
                    <h5>Contact</h5>
                    <span></span>
                    <ul>
                        <li>Email: hoag@gmail.com</li>
                        <li>Phone: 0123456789</li>
                    </ul>
                </div>
                <div className="footer__social">
                    <ul>
                        <li>Facebook</li>
                        <li>Google</li>
                        <li>Twister</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
