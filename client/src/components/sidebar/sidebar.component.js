import React from 'react';
import { MdClose, FiGithub, AiOutlineLinkedin } from 'react-icons/all';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarData from './sidebar.data';
import './sidebar.scss';

function Sidebar(props) {
    const { user, style, handleToggle } = props;

    const auth = user
        ? {
              title: 'Logout',
              path: '/logout',
          }
        : {
              title: 'Register / Login',
              path: '/login',
          };

    return (
        <div className="sidebar" style={style}>
            <div className="sidebar__header">
                <MdClose onClick={(e) => handleToggle(false)} />
            </div>
            <ul className="sidebar__content">
                <li className="sidebar__content--item">
                    <Link to={auth.path} onClick={(e) => handleToggle(false)}>
                        {auth.title}
                    </Link>
                </li>
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
                <a href="https://github.com/hoangduc97dn">
                    <FiGithub />
                </a>
                <a href="https://linkedin.com">
                    <AiOutlineLinkedin />
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = ({ AuthReducer }) => ({
    user: AuthReducer.user,
});

export default connect(mapStateToProps)(Sidebar);
