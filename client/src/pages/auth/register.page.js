import React, { useState } from 'react';
import {
    HiOutlineMail,
    AiOutlineLock,
    MdConfirmationNumber,
    AiFillWarning,
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import {
    emailValidate,
    passwordValidate,
    confirmValidate,
} from './auth.validation';
import Form from '../../components/form/form.component';
import Input from '../../components/input/input.component';
import Tooltip from '../../components/tooltip/tooltip.component';
import './auth.scss';

function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [remember, setRemember] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const handleEmail = (e) => {
        setEmailError(emailValidate(e.target.value));
        setEmail(e.target.value);
    };
    const handlePass = (e) => {
        setPassError(passwordValidate(e.target.value));
        setPass(e.target.value);
    };
    const handleConfirm = (e) => {
        setConfirmError(confirmValidate(e.target.value, pass));
        setPass(e.target.value);
    };
    const handleRemember = (e) => setRemember(e.target.checked);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(emailError && passError)) {
            console.log('register');
        }
    };

    return (
        <div className="register auth">
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
                <Input
                    type="password"
                    Icon={MdConfirmationNumber}
                    placeholder="Confirm"
                    value={confirm}
                    handleChange={handleConfirm}
                    required={true}
                    tooltip={
                        <Tooltip text={confirmError}>
                            <AiFillWarning />
                        </Tooltip>
                    }
                    invalid={!!confirmError}
                />
                <div className="remember">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={handleRemember}
                    />
                    <span>remember me</span>
                </div>
                <button type="submit">REGISTER</button>
                <Link to={'/login'}>Already account? Sign in now</Link>
            </Form>
        </div>
    );
}
export default Register;
