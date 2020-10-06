import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">Logo</Link>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
