import React from 'react'
import "./mainMenu.scss";
import menu from "@/data/menu.json";
import Link from 'next/link';

const MainMenuContent = () => {
    return (
        <div className="main-menu">
            <ul className="main-menu-background">
                {menu.slice(1).map((item) => (
                    <li key={item.title} data-text={item.title}>
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
            <ul className="main-menu-list">
                {menu.slice(1).map((item) => (
                    <li key={item.title} data-text={item.title}>
                        <div className="glitch-line"></div>
                        <Link href={item.link} target={item.link.includes("http") ? "_blank" : "_self"}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MainMenuContent;