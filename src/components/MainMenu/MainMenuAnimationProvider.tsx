"use client";

import React, { useEffect } from 'react'

const MainMenuAnimationProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        
        const mouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const { clientX, clientY } = mouseEvent;
            
            const mainMenuList = document.querySelector('.main-menu-list') as HTMLElement;
            const bounds = mainMenuList.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            const rotateX = ((clientY - centerY) / 20) * -0.5;
            const rotateY = ((clientX - centerX) / 20) * 0.5;
            mainMenuList?.style.setProperty('transform', `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
            mainMenuList?.style.setProperty('transform-origin', `${centerX}px ${centerY}px`);
        };
        
        const mainMenu = document.querySelector('.main-menu') as HTMLElement;
        
        if (mainMenu) {
            mainMenu.addEventListener('mousemove', mouseMove);
        }
        
        return () => {
            if (mainMenu) {
                mainMenu.removeEventListener('mousemove', mouseMove);
            }
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default MainMenuAnimationProvider;