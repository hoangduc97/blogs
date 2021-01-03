import React from 'react';
import './input.scss';

function Input(props) {
    const {
        type,
        Icon,
        placeholder,
        value,
        handleChange,
        required,
        tooltip,
        invalid
    } = props;

    return (
        <div className={'input ' + (invalid ? 'invalid' : '')}>
            {Icon && <Icon />}
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
            />
            {invalid && tooltip}
        </div>
    );
}

export default Input;
