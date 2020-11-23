import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {Link} from "react-router-dom";
import '../sign.scss';

const SignUp = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (<div className="sign signup">
        <form className="sign__form" onSubmit={handleSubmit}>
            <Link to={'/signin'} className="redirect__to">
                <span className="curved__arrow"></span>
                <p>Signin</p>
            </Link>
            <div className="sign__form--username">
                <AiOutlineUser className="sign__form--icon"/>
                <input id='sign_username' type="text" required={true}/>
                <span className="sign__form--placeholder">Username</span>
            </div>
            <div className="sign__form--password">
                <RiLockPasswordLine className="sign__form--icon"/>
                <input id='sign_password' type="password" required={true}/>
                <span className="sign__form--placeholder">Password</span>
            </div>
            <div className="sign__form--password">
                <RiLockPasswordLine className="sign__form--icon"/>
                <input id='sign_password' type="password" required={true}/>
                <span className="sign__form--placeholder">Confirm Password</span>
            </div>
            <button className="sign__form--submit" type="submit">
                Signup
            </button>
        </form>
    </div>);
};

export default SignUp;