import React from 'react';
import { MdClose } from 'react-icons/all';
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
                    <li key={index}>
                        <Link to={ele.path}>{ele.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
