import React, { useState } from 'react';
import { HiOutlineMail, AiOutlineLock, AiFillWarning } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { emailValidate, passwordValidate } from './auth.validation';
import Form from '../../components/form/form.component';
import Input from '../../components/input/input.component';
import Tooltip from '../../components/tooltip/tooltip.component';
import './auth.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [remember, setRemember] = useState(false);

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
    const handleRemember = (e) => setRemember(e.target.checked);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(emailError && passError)) {
            console.log('login');
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
                <div className="remember">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={handleRemember}
                    />
                    <span>remember me</span>
                </div>
                <button type="submit">LOGIN</button>
                <Link to={'/register'}>Not a member? Sign up now</Link>
            </Form>
        </div>
    );
}

export default Login;
