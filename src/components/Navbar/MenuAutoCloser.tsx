"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MenuAutoCloser() {
  const pathname = usePathname();
  
  useEffect(() => {
    const checkbox = document.getElementById('mobile-menu-toggler') as HTMLInputElement;
    if (checkbox && checkbox.checked) {
      checkbox.checked = false;
    }

    const navbarDesktopMenu = document.querySelector('.navbar-desktop-menu') as HTMLInputElement;
    if (navbarDesktopMenu && pathname === "/" ) {
        navbarDesktopMenu.classList.add('display-none');
    } else {
      if (navbarDesktopMenu) {
        navbarDesktopMenu.classList.remove('display-none');
      }
    }

  }, [pathname]);


  useEffect(() => {
    const handleResize = (e: Event) => {
        if (e.target instanceof Window) {
            if (window.innerWidth > 1140) {
                const checkbox = document.getElementById('mobile-menu-toggler') as HTMLInputElement;
                if (checkbox && checkbox.checked) {
                    checkbox.checked = false;
                }
            }
        }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);


  return null;
} 