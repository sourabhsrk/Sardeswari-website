'use client';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [showSideBar,setShowSideBar] = useState(false);

    useEffect(() => {
      const desktopNav = document.getElementById('desktopNav');
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) { // Adjust the scroll position as needed
          desktopNav?.classList.add('stickyNav');
        } else {
          desktopNav?.classList.remove('stickyNav');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const IconStyle = {fontSize: '40px', color: '#FFFFFF', p: '30px'};
    const isBtnActive = (path: string): boolean => {
      const pathname = usePathname();
      return pathname === path;
    }
  return (
    <nav>
        <ul id="desktopNav" >
            <li><a href="/"><Image src="/Logo.png" alt="logo" width="160" height="110"/></a></li>
            <li className="hideOnMobile"><a href="/" style={{color: isBtnActive('/') ? 'darkOrange': ''}}>Home</a></li>
            <li className="hideOnMobile"><a href="/about" style={{color: isBtnActive('/about') ? 'darkOrange': ''}}>About Us</a></li>
            <li className="hideOnMobile"><a href="/menu" style={{color: isBtnActive('/menu') ? 'darkOrange': ''}}>Our Menu</a></li>
            <li className="hideOnMobile"><a href="/gallery" style={{color: isBtnActive('/gallery') ? 'darkOrange': ''}}>Gallery</a></li>
            <li className="hideOnMobile"><a href="/contact" style={{color: isBtnActive('/contact') ? 'darkOrange': ''}}>Contact</a></li>
            <li className="hideOnMobile"><a href="/job" style={{color: isBtnActive('/job') ? 'darkOrange': ''}}>Job</a></li>
            <li className="hideOnDesktop" onClick={()=>setShowSideBar(true)}><MenuIcon sx={IconStyle}/></li>
        </ul>
        <ul className={showSideBar ? 'sideBar' : 'hideSideBar'}>
            <li onClick={()=>setShowSideBar(false)}><CloseIcon sx={IconStyle}/></li>
            <li><a href="/" style={{color: isBtnActive('/') ? 'darkOrange': ''}}>Home</a></li>
            <li><a href="/about" style={{color: isBtnActive('/about') ? 'darkOrange': ''}}>About Us</a></li>
            <li><a href="/menu" style={{color: isBtnActive('/menu') ? 'darkOrange': ''}}>Our Menu</a></li>
            <li><a href="/gallery" style={{color: isBtnActive('/gallery') ? 'darkOrange': ''}}>Gallery</a></li>
            <li><a href="/contact" style={{color: isBtnActive('/contact') ? 'darkOrange': ''}}>Contact</a></li>
            <li><a href="/job" style={{color: isBtnActive('/job') ? 'darkOrange': ''}}>Job</a></li>
        </ul>
    </nav>
  )
}
