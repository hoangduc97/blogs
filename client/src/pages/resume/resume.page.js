import React from 'react';
import { FaUserNinja, SiComposer, FaTerminal } from 'react-icons/all';
import { sidebar, skills } from './resume.data';
import './resume.scss';

export default function Resume() {
    return (
        <div className="resume">
            <div className="resume__sidebar">
                <ul className="navbar">
                    {sidebar.map((ele, index) => (
                        <li className="navbar--item" key={index}>
                            <a href={'#' + ele}>{ele}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="resume__content">
                <section className="about" id="about">
                    <div className="item">
                        <div className="title">
                            <FaUserNinja />
                            <span>about me</span>
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
                <section className="skills item" id="skills">
                    <div className="title">
                        <FaTerminal />
                        <span>skills</span>
                    </div>
                    <div className="info">
                        {skills.map((ele, index) => (
                            <div key={index} className="skills__groups">
                                <span>{ele.group}</span>
                                <ul>
                                    {ele.skills.map((e, i) => (
                                        <li key={i}>
                                            <p>{e.name}</p>
                                            <div>
                                                {[...Array(e.total).keys()].map(
                                                    (ex) => (
                                                        <span
                                                            key={ex}
                                                            className="skills__groups--check"
                                                        ></span>
                                                    )
                                                )}
                                                {[
                                                    ...Array(
                                                        5 - e.total
                                                    ).keys(),
                                                ].map((ex) => (
                                                    <span key={ex}></span>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="services" id="services"></section>
                <section className="contact" id="contact"></section>
            </div>
        </div>
    );
}
