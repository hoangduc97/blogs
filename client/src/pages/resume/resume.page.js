import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import avatar from '../../assets/image/avatar.png';
import './resume.scss';

function Resume() {
    const sidebar = ['about', 'skills', 'services', 'contact'];
    const socials = [
        {
            link: 'https://facebook.com',
            icon: FaFacebookF,
        },
        {
            link: 'https://instagram.com',
            icon: FaInstagram,
        },
        {
            link: 'https://linkedin.com',
            icon: FaLinkedinIn,
        },
        {
            link: 'https://github.com',
            icon: FaGithubAlt,
        },
    ];

    return (
        <div className="resume">
            <div className="resume__sidebar">
                <ul className="resume__sidebar--group">
                    {sidebar.map((element, index) => (
                        <li
                            key={index}
                            className="resume__sidebar--element"
                            title-sidebar={element}
                        ></li>
                    ))}
                </ul>
                <div className="socials">
                    <span className="vertial__line"></span>
                    <ul className="socials__group">
                        {socials.map((element, index) => (
                            <li key={index} className="socials__group--element">
                                <a href={element.link}>
                                    <element.icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="resume__avatar">
                <img src={avatar} alt="Zrik" />
            </div>
            <div className="resume__detail">
            </div>
        </div>
    );
}

export default Resume;
