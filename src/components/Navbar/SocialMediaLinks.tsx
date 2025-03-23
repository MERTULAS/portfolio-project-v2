import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
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
        title: "Twitter",
        icon: <TwitterOutlined />,
        link: "https://twitter.com/mertulaas"
    },
    {
        title: "Youtube",
        icon: <YoutubeOutlined />,
        link: "https://twitter.com/mertulaas"
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