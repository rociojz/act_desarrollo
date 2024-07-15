import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const Layout = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,});

    const detectDimension = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    useEffect(() => {
      window.addEventListener("resize", detectDimension);
      windowDimension.width > 800 && setNavBarOpen(false);
      return () => {
        window.removeEventListener("resize", detectDimension);
      };
    }, [windowDimension]);
    
  return (
    <> 
      <div className={
                navBarOpen
                ? styles.navOpen
                : useScrollPosition > 0
                ? styles.navOnScroll
                : styles.navBar
      }>
      {!navBarOpen && <p className={styles.logo}>Blibioteca Digital | UNIR</p>}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      <nav className={styles.linksContainer}>
        <Link className={styles.navLink} to="/">Inicio</Link>
        <Link className={styles.navLink} to="/Libros">Libros</Link>
      </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
