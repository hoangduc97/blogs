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
        group: 'software development',
        skills: [
            { name: 'python', total: 2 },
            { name: 'c/c++', total: 2 },
        ],
    },
    {
        group: 'orther',
        skills: [
            { name: 'aws', total: 2 },
            { name: 'linux system', total: 3 },
            { name: 'docker', total: 2 },
        ],
    },
];

export { sidebar, socials, skills };
