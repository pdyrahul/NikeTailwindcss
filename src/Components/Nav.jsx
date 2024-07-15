import React, { useEffect, useState } from 'react';
import headerLogo from '../assets/images/header-logo.svg';
import { navLinks } from "../constants";
import { hamburger } from '../assets/icons';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sm:px-16 p-4 z-20 w-full sticky top-0 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
                
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'  aria-label={item.label}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburgerIcon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
