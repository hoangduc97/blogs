import React from 'react';
import './form.scss';

function Form(props) {
    return <form onSubmit={props.handleSubmit}>{props.children}</form>;
}

export default Form;
