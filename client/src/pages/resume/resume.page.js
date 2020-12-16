import React from 'react';
import { FaUserNinja, SiComposer } from 'react-icons/all';
import { sidebar, skills } from './resume.data';
import './resume.scss';

export default function Resume() {
    return (
        <div className="resume">
            <div className="resume__sidebar">
                <ul className="navbar">
                    {sidebar.map((ele, index) => (
                        <li className="navbar--item" key={index}>
                            {ele}
                        </li>
                    ))}
                </ul>
                <span className="vline"></span>
            </div>
            <div className="resume__content">
                <section className="about">
                    <div className="item">
                        <div className="title">
                            <FaUserNinja />
                            <span>About me</span>
                        </div>
                        <div className="info">
                            <span>Truong Hoang Duc</span>
                            <span>23 years</span>
                            <span>Developer</span>
                        </div>
                        <div className="brief">
                            My name is Duc, I'm working Web and Desktop
                            application, deploy and config system.
                        </div>
                    </div>
                    <SiComposer />
                </section>
                <section className="skills"></section>
                <section className="services"></section>
                <section className="contact"></section>
            </div>
        </div>
    );
}
