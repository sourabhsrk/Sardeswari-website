'use client';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [showSideBar,setShowSideBar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "navBarScrolled" : ""}>
        <ul>
            <li><a href="#"><Image src="/Logo.png" alt="logo" width="160" height="110"/></a></li>
            <li className="hideOnMobile"><a href="#">Home</a></li>
            <li className="hideOnMobile"><a href="#">About Us</a></li>
            <li className="hideOnMobile"><a href="#">Our Menu</a></li>
            <li className="hideOnMobile"><a href="#">Service</a></li>
            <li className="hideOnMobile"><a href="#">Contact</a></li>
            <li className="hideOnMobile"><a href="#">Job</a></li>
            <li className="hideOnDesktop" onClick={()=>setShowSideBar(true)}><a href="#"><MenuIcon sx={{fontSize: '40px'}}/></a></li>
        </ul>
        <ul className={showSideBar ? 'sideBar' : 'hideSideBar'}>
            <li onClick={()=>setShowSideBar(false)}><a href="#"><CloseIcon sx={{fontSize: '40px'}}/></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Menu</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Job</a></li>
        </ul>
    </nav>
  )
}
