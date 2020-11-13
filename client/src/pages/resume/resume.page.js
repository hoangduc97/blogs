import React from 'react';
import { FaInbox, FaTerminal, FaProjectDiagram } from 'react-icons/fa';
import * as data from './resume.data';
import avatar from '../../assets/image/avatar.png';
import './resume.scss';

function Resume() {
    const total_skill = (total) => {
        const render = [];
        for (let i = 0; i < total; i++) {
            render.push('light');
        }
        for (let i = 0; i < 5 - total; i++) {
            render.push(' ');
        }
        return render;
    };
    return (
        <div className="resume">
            <div className="resume__sidebar">
                <ul className="resume__sidebar--group">
                    {data.sidebar.map((element, index) => (
                        <a
                            key={index}
                            className="resume__sidebar--element"
                            title-sidebar={element}
                            href={'#resume__' + element}
                        ></a>
                    ))}
                </ul>
                <div className="socials">
                    <span className="vertial__line"></span>
                    <ul className="socials__group">
                        {data.socials.map((element, index) => (
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
                <section className="resume__about" id="resume__about">
                    <div className="resume__title">
                        <FaInbox className="resume__title--icon" />
                        <p className="resume__title--name">about me</p>
                    </div>
                    <ul className="resume__about__info">
                        <li className="resume__about__info--item">23 years</li>
                        <li className="resume__about__info--item">Vietnam</li>
                        <li className="resume__about__info--item">Developer</li>
                    </ul>
                    <p className="resume__about__brief">
                        Make things special and original on the web with Niko.
                        If you are looking for the best way to present your
                        skills, experience and services in the best possible
                        light, get your hands on Niko. Kick things off by
                        selecting the right samples, as well as dark or light
                        look
                    </p>
                </section>
                <section className="resume__skills" id="resume__skills">
                    <div className="resume__title">
                        <FaTerminal className="resume__title--icon" />
                        <p className="resume__title--name">skills</p>
                    </div>
                    <div className="skills__types">
                        {data.skills.map((ele, index) => (
                            <div key={index}>
                                <p className="skills__types--name">
                                    {ele.group}
                                </p>
                                <ul className="skills__types--listgroup">
                                    {ele.skills.map((skill, i) => (
                                        <li
                                            key={i}
                                            className="skills__types--listgroup--item"
                                        >
                                            <p className="item--name">
                                                {' '}
                                                {skill.name}{' '}
                                            </p>
                                            <div className="item--total">
                                                {total_skill(skill.total).map(
                                                    (value, j) => (
                                                        <span
                                                            key={j}
                                                            className={
                                                                'item--value ' +
                                                                value
                                                            }
                                                        ></span>
                                                    )
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="resume__services" id="resume__services">
                    <div className="resume__title">
                        <FaProjectDiagram className="resume__title--icon" />
                        <p className="resume__title--name">services</p>
                    </div>
                    <ul className="resume__about__info">
                        <li className="resume__about__info--item">23 years</li>
                        <li className="resume__about__info--item">Vietnam</li>
                        <li className="resume__about__info--item">Developer</li>
                    </ul>
                    <p className="resume__about__brief">
                        Make things special and original on the web with Niko.
                        If you are looking for the best way to present your
                        skills, experience and services in the best possible
                        light, get your hands on Niko. Kick things off by
                        selecting the right samples, as well as dark or light
                        look
                    </p>
                </section>
                <section
                    className="resume__contact"
                    id="resume__contact"
                ></section>
            </div>
        </div>
    );
}

export default Resume;
