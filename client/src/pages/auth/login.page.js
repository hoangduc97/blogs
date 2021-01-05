import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { HiOutlineMail, AiOutlineLock, AiFillWarning } from 'react-icons/all';
import { Link, useHistory } from 'react-router-dom';
import { emailValidate, passwordValidate } from './auth.validation';
import { login } from '../../store/auth/auth.action';
import Form from '../../components/form/form.component';
import Input from '../../components/input/input.component';
import Tooltip from '../../components/tooltip/tooltip.component';
import './auth.scss';

function Login(props) {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const handleEmail = (e) => {
        setEmailError(emailValidate(e.target.value));
        setEmail(e.target.value);
    };
    const handlePass = (e) => {
        setPassError(passwordValidate(e.target.value));
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(emailError && passError)) {
            props.login({ email: email, password: pass }, (url) => {
                history.push(url);
            });
        }
    };

    return (
        <div className="login auth">
            <Form handleSubmit={handleSubmit}>
                <Input
                    type="email"
                    Icon={HiOutlineMail}
                    placeholder="Email"
                    value={email}
                    handleChange={handleEmail}
                    required={true}
                    tooltip={
                        <Tooltip text={emailError}>
                            <AiFillWarning />
                        </Tooltip>
                    }
                    invalid={!!emailError}
                />
                <Input
                    type="password"
                    Icon={AiOutlineLock}
                    placeholder="Password"
                    value={pass}
                    handleChange={handlePass}
                    required={true}
                    tooltip={
                        <Tooltip text={passError}>
                            <AiFillWarning />
                        </Tooltip>
                    }
                    invalid={!!passError}
                />
                {props.error && <p>{props.error}</p>}
                <button type="submit">LOGIN</button>
                <Link to={'/register'}>Not a member? Sign up now</Link>
            </Form>
        </div>
    );
}

const mapStateToProps = ({ AuthReducer }) => ({
    error: AuthReducer.loginError,
});
const mapDispatchToProps = (dispatch) => ({
    login: (data, cb) => dispatch(login(data, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
