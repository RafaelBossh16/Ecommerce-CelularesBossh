import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/',
    },
    {
        id: 2,
        title: 'Celulares',
        href: '/celulares',
    },
    {
        id: 3,
        title: 'Sobre Nosotros',
        href: '/nosotros',
    },
];

export const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        icon: <FaFacebook />
    },
    {
        id: 2,
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: <FaSquareInstagram />
    },
    {
        id: 3,
        title: 'Twitter',
        href: 'https://www.twitter.com/',
        icon: <FaSquareXTwitter />
    },
    {
        id: 4,
        title: 'TikTok',
        href: 'https://www.tiktok.com/',
        icon: <AiFillTikTok />
    }
]