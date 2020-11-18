import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithubAlt,
} from 'react-icons/fa';
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
const skills = [
    {
        group: 'web development',
        skills: [
            { name: 'html5/css3', total: 2 },
            { name: 'javascript', total: 2 },
        ],
    },
    {
        group: 'software development',
        skills: [
            { name: 'python', total: 3 },
            { name: 'c/c++', total: 3 },
        ],
    },
    {
        group: 'orther',
        skills: [
            { name: 'aws', total: 2 },
            { name: 'linux system', total: 3 },
            { name: 'docker', total: 2 },
            { name: 'no-sql', total: 2 },
        ],
    },
];

export { sidebar, socials, skills };
