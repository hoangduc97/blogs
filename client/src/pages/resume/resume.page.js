import React from 'react';
import {
    FaInbox,
    FaTerminal,
    FaProjectDiagram,
    FaPhoneAlt,
} from 'react-icons/fa';
import { ImLocation2, ImMail } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
                <div className="resume__author">
                    <p className="name" data-text="DucTH">
                        DucTH
                    </p>
                </div>
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
                </section>
                <section className="resume__contact" id="resume__contact">
                    <div className="resume__title">
                        <FaPhoneAlt className="resume__title--icon" />
                        <p className="resume__title--name">contacts</p>
                    </div>
                    <div className="resume__contact--info">
                        <p className="resume__contact--info--brief">
                            If you have any questions regarding this privacy
                            statement, the practices of this site or your
                            dealings with me, please do not hesitate to contact
                            at the above-mentioned address, e-mail address or
                            phone number.
                        </p>
                        <LoadScript googleMapsApiKey="AIzaSyAX4aweIkqiXM_cNn05aDkEdn2XroDzoB0">
                            <GoogleMap
                                id="resume__map"
                                zoom={8}
                                center={{ lat: -34.397, lng: 150.644 }}
                            ></GoogleMap>
                            <Marker position={{ lat: -34.397, lng: 150.644 }} />
                        </LoadScript>
                        <div className="resume__contact--method">
                            <div
                                className="resume__contact--method--location"
                                data-text="Danang, Vietnam"
                            >
                                <ImLocation2 />
                            </div>
                            <div
                                className="resume__contact--method--phone"
                                data-text="+84 862921702"
                            >
                                <FaPhoneAlt />
                            </div>
                            <div
                                className="resume__contact--method--email"
                                data-text="hoangduc97dn@gmail.com"
                            >
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                    <form
                        className="resume__contact--form"
                        action="mailto:hoangduc97dn@gmail.com"
                        method="post"
                        encType="text/plain"
                    >
                        <span className="resume__contact--title">send message</span>
                        <input
                            className="resume__contact--username"
                            type="text"
                            name="username"
                            placeholder="user name"
                        />
                        <input
                            className="resume__contact--email"
                            type="email"
                            name="email"
                            placeholder="user email"
                        />
                        <textarea
                            className="resume__contact--message"
                            rows="4"
                            cols="50"
                            name="message"
                            placeholder="content message"
                        />
                        <input className="resume__contact--button" type="submit" value="send" />
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Resume;
