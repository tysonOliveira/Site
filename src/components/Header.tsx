import {FaGithub, SiGmail, FaLinkedinIn} from 'react-icons/all';

import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="#">Thaison Reis de Oliveira</a>

        <div className={style.icons}>
          <a href="#"><FaGithub size={24} /></a>
          <a href="#"><FaLinkedinIn size={24} /></a>
          <a href="#"><SiGmail size={24} /></a>
        </div>
      </nav>
      
      <div className={style.message}>
        <span>Ad Astra Per Aspera</span>
      </div>
    </header>
  );
}