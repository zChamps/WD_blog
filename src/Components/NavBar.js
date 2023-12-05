import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../Hooks/useAuthentication';
import { useAuthValue } from '../Context/AuthContext';
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"} className={styles.brand}>
        {menuOpen ? (
          <>
          WD <span>Blog</span>
        </>
        
        ) : (
          <>
            WD <span>Blog</span>
          </>
        )}
      </NavLink>

      <div className={styles.menu_icon} onClick={handleMenuClick}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles.links_list} ${menuOpen ? styles.show : ""}`}>
        <li>
          <NavLink to={"/"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to={"/login"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/register"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to={"/posts/create"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>Novo Post</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to={"/about"} onClick={handleMenuClick} className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
