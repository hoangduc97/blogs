import React from 'react';
import Header from '../components/header/header.component';
import RootRouter from './root.router';
import './root.scss';

const RootPage = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="wrapper__container">
                <RootRouter />
            </div>
        </div>
    );
};

export default RootPage;
