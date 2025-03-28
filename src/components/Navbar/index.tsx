import React from 'react'
import './navbar.scss'
import SocialMediaLinks from './SocialMediaLinks';
import NavMenu from './NavMenu';
import MenuAutoCloser from './MenuAutoCloser';

const Navbar = () => {
    return (
        <nav>
            <h1>MERT ULAS<span>Software Developer</span></h1>
            <MenuAutoCloser />
            <input type='checkbox' id="mobile-menu-toggler" className='mobile-menu-toggler-checkbox' />
            <div className="navbar-mobile-menu-toggler">
                <label htmlFor="mobile-menu-toggler" className='mobile-menu-toggler-label'>
                    <div className="navbar-mobile-menu-toggler-lines">
                        <div className="navbar-mobile-menu-toggler-line"></div>
                        <div className="navbar-mobile-menu-toggler-line"></div>
                        <div className="navbar-mobile-menu-toggler-line"></div>
                    </div>
                </label>
            </div>
            <div className="navbar-desktop-menu">
                <NavMenu />
            </div>
            <SocialMediaLinks />
            <div className="navbar-mobile-menu">
                <NavMenu />
                <SocialMediaLinks />
            </div>
        </nav>
    )
}

export default Navbar;