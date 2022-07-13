import {FaGithub, SiGmail, FaLinkedinIn} from 'react-icons/all';

import style from './Header.module.css';

interface html {
  elemento: String
}

export function Header() {

  
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a className={style.name} href="#">Thaison Reis de Oliveira</a>

        <div className={style.icons}>
          <a href="#"><FaGithub size={24} /></a>
          <a href="#"><FaLinkedinIn size={24} /></a>
          <a href="#"><SiGmail size={24} /></a>
        </div>
      </nav>
      
     <div className={style.welcome}>
      <div className={style.welcomeContent}>
        <p>HTML5, CSS3, JAVASCRIPT, REACT, VITE, SQL| </p>
      </div>
     </div>

      <div className={style.message}>
        <span>Ad Astra Per Aspera</span>
      </div>
    </header>
  );
}