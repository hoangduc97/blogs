import React from 'react';
import {
    FaUserNinja,
    SiComposer,
    FaTerminal,
    MdDeviceHub,
    MdWeb,
    MdComputer,
    MdContacts,
    ImLocation2,
    FaPhoneAlt,
    AiOutlineMail,
} from 'react-icons/all';
import { skills } from './resume.data';
import ContactMap from '../../components/map/map.component';
import './resume.scss';

export default function Resume() {
    return (
        <div className="resume">
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
                        My name is Duc, I'm working Web and Desktop application,
                        deploy and config system.
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
                                            {[...Array(5 - e.total).keys()].map(
                                                (ex) => (
                                                    <span key={ex}></span>
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
            <section className="service item" id="service">
                <div className="title">
                    <MdDeviceHub />
                    <span>service</span>
                </div>
                <ul className="info">
                    <li>
                        <MdWeb />
                        <span>Desktop Application</span>
                    </li>
                    <li>
                        <MdComputer />
                        <span>Web Application</span>
                    </li>
                </ul>
            </section>
            <section className="contact item" id="contact">
                <div className="title">
                    <MdContacts />
                    <span>contact</span>
                </div>
                <div className="info">
                    <p className="info__content">
                        If you have any questions regarding this privacy
                        statement, the practices of this site or your dealings
                        with me, please do not hesitate to contact at the
                        above-mentioned address, e-mail address or phone number.
                    </p>
                    <ContactMap />
                    <div className="contact--method">
                        <div
                            className="contact--method__location"
                            data-text="Danang, Vietnam"
                        >
                            <ImLocation2 />
                        </div>
                        <div
                            className="contact--method__phone"
                            data-text="+84 862921702"
                        >
                            <FaPhoneAlt />
                        </div>
                        <div
                            className="contact--method__email"
                            data-text="hoangzrik@gmail.com"
                        >
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
                <form
                    className="contact--form"
                    action="mailto:hoangzrik@gmail.com"
                    method="post"
                    encType="text/plain"
                >
                    <input
                        className="contact--username"
                        type="text"
                        name="username"
                        placeholder="name"
                    />
                    <input
                        className="contact--email"
                        type="email"
                        name="email"
                        placeholder="email"
                    />
                    <textarea
                        className="contact--message"
                        rows="4"
                        cols="50"
                        name="message"
                        placeholder="content message"
                    />
                    <input
                        className="contact--button"
                        type="submit"
                        value="send"
                    />
                </form>
            </section>
        </div>
    );
}
