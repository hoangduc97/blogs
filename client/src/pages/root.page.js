import React, { useState } from 'react';
import Header from '../components/header/header.component';
import Sidebar from '../components/sidebar/sidebar.component';
import RootRouter from './root.router';
import './root.scss';

const RootPage = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (newToggle) => setToggle(newToggle);

    return (
        <React.Fragment>
            <Sidebar
                handleToggle={handleToggle}
                style={{ transform: toggle ? '' : 'translateX(-20em)' }}
            />
            <div
                className="wrapper"
                style={{ transform: toggle ? 'translateX(20em)' : '' }}
            >
                <div
                    className="wrapper__layer"
                    style={{
                        opacity: toggle ? 0.9 : 0,
                        visibility: toggle ? 'visible' : 'hidden',
                    }}
                    onClick={(e)=>handleToggle(false)}
                ></div>
                <Header handleToggle={handleToggle} />
                <div className="wrapper__container">
                    <RootRouter />
                </div>
            </div>
        </React.Fragment>
    );
};

export default RootPage;
