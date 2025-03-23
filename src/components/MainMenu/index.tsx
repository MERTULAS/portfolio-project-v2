import React from 'react'
import "./mainMenu.scss";
import menu from "@/data/menu.json";
import Link from 'next/link';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <ul>
        {menu.slice(1).map((item) => (
          <li key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainMenu;