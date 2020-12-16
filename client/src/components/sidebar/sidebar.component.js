import React from 'react';
import {
    MdClose,
    AiOutlineFacebook,
    FiGithub,
    AiOutlineInstagram,
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import SidebarData from './sidebar.data';
import './sidebar.scss';

export default function Sidebar(props) {
    const { style, handleToggle } = props;

    return (
        <div className="sidebar" style={style}>
            <div className="sidebar__header">
                <MdClose onClick={(e) => handleToggle(false)} />
            </div>
            <ul className="sidebar__content">
                {SidebarData.map((ele, index) => (
                    <li key={index} className="sidebar__content--item">
                        <Link
                            to={ele.path}
                            onClick={(e) => handleToggle(false)}
                        >
                            {ele.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="sidebar__footer">
                <a href="https://facebook.com">
                    <AiOutlineFacebook />
                </a>
                <a href="https://github.com/hoangduc97dn">
                    <FiGithub />
                </a>
                <a href="https://instagram.com">
                    <AiOutlineInstagram />
                </a>
            </div>
        </div>
    );
}
