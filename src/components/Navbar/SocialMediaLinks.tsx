import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined, YoutubeOutlined, XOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react'

const socialMediaLinks = [
    {
        title: "Github",
        icon: <GithubOutlined />,
        link: "https://github.com/MERTULAS"
    },
    {
        title: "Linkedin",
        icon: <LinkedinOutlined />,
        link: "https://www.linkedin.com/in/mert-ulas/"
    },
    {
        title: "X",
        icon: <XOutlined />,
        link: "https://x.com/mertulaas"
    },
    {
        title: "Youtube",
        icon: <YoutubeOutlined />,
        link: "https://www.youtube.com/@mertulas"
    }
];

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links">
            <ul>
                {
                    socialMediaLinks.map((link) => (
                        <li key={link.title}>
                            <Link href={link.link} target="_blank" rel="noopener noreferrer nofollow" title={link.title}>
                                {link.icon}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialMediaLinks