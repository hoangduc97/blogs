import React from 'react';
import './tooltip.scss';

function Tooltip(props) {
    const { text, children } = props;
    return (
        <div className="tooltip">
            {children}
            <span className="tooltip__text">{text}</span>
        </div>
    );
}

export default Tooltip;
