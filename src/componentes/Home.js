import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
        Blibioteca Digital <br />
          <b></b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
       <Link
          to="Invitado"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Invitado
        </Link>
      </div>
      <div className={styles.p}> 
          <p>
        Disfruta de una nueva experiencia de lectura
        accesible y adaptada a tus necesidades.
        </p>
      </div>
      <div className={styles.webImage}>
      <p></p>
        <img
        className={styles.webImage}
        src={require("../assets/libros3.jpeg")} alt=""
      ></img>
      </div>
    </div>
  );
};

export default Home;