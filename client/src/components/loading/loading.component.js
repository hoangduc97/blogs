import React from 'react';
import './loading.scss';

function Loading() {
    return <div className="loading">
        <div className="spin">
            <span className="curved__arrow"></span>
            <span className="curved__arrow"></span>
        </div>
    </div>;
}

export default Loading;
