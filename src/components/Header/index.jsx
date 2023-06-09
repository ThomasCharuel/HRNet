import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import logo from '../../assets/img/logo.jpeg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo HRnet"
          className={styles.header__logo}
          width="2.6rem"
          height="2.6rem"
        />
      </Link>
      <nav className={styles.header__navigation}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees" className={({ isActive }) => (isActive ? styles.active : '')}>
              Employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
