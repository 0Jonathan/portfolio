import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';

const Navbar = () => {

  const { t } = useTranslation();

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true); // true for English, false for Spanish

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'fr' : 'en';
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(newLang);
  };
  
  return (
    <nav
    className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
       <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link 
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        <img src={logo} alt= "logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">Jonathan&nbsp;<span className="sm:block hidden">| {t('job')}
        </span>
        </p>
        </Link>

            {/* Language Toggle Switch */}
        <div className="language-toggle">
          <input 
            id="lang-toggle" 
            type="checkbox" 
            checked={isEnglish} 
            onChange={toggleLanguage} 
            className="checkbox" 
          />
          <label htmlFor="lang-toggle" className="label">
            <span className="inner-circle"></span>
            <span className="switch-text">FR | EN</span>
          </label>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => 
          <li 
          key={link.id}
          className={`${
            active === link.title
            ? "text-white"
            : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
          </li>)}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => 
          <li 
          key={link.id}
          className={`${
            active === link.title
            ? "text-white"
            : "text-secondary"
          } font-poppins font-medium cursor-pointer text-[16px]`}
          onClick={() => { setToggle(!toggle); setActive(link.title);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
          </li>)}
        </ul>
          </div>
        </div>
       </div>
    </nav>
  )
}

export default Navbar