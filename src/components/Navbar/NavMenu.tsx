import React from 'react'
import menu from "@/data/menu.json";
import Link from 'next/link';

const NavMenu = () => {
  return (
    <ul className='nav-menu'>
      {menu.map((item, index) => (
        <li key={`${index}-${item.title}`}>
          <Link href={item.link}><span>0{index + 1}.</span> {item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavMenu;