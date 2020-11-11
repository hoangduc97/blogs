import React from 'react';

function Resume() {
    const sidebar = ['about', 'skills', 'services', 'contact'];

    return (
        <div id="resume">
            <div className="sidebar">
                <ul className="resume__sidebar--group">
                    {sidebar.map((element, index) => (
                        <li key={index} className="resume__sidebar--element">
                            <span className="horizontal__line"></span>
                            <p>{element}</p>
                        </li>
                    ))}
                </ul>
                <div className="socials">
                    <span className="vertial__line"></span>
                    <ul className="socials__group">
                        <li className="socials__group--element">
                            <a href="https://facebook.com">
                                <img
                                    src={require('../../assets/image/facebook.svg')}
                                    alt="facebook"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
