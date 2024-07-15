import { useParams, useNavigate } from "react-router-dom";
import { libros } from "../data";
import '../styles/styles.css';
import styles from "./Libreria.module.css";
import { Link } from "react-scroll";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const oneLib = libros.find((e) => e.id === Number(id));
  return (
    <>

      <div className="libro">
        <p></p>
        <br></br>
            <h1>{oneLib.title}</h1>
            <img src={oneLib.image} alt={oneLib.title} width={300}/>
            <p>AUTOR: {oneLib.author}</p>
            <p>ISBN10: {oneLib.isbn10}</p>
            <p>ISBN13: {oneLib.isbn13}</p>
            <p>Género: {oneLib.genre}</p>
            <p>{oneLib.synopsis}</p>
            <p>Puntuación: {oneLib.rating}</p>
            <div className={styles.ctaContainer}>
              <Link
                  to="Alquilar"
                  smooth
                  duration={500}
                  className={styles.callToAction}
                >
                  Alquilar
                </Link>
              </div>
              <div className={styles.ctaContainer}>
              <button className={styles.callToAction} 
                  onClick={() => navigate(-1)}>← Regresar</button>
              </div>

        </div>
    </>
  );
};

export default Details;
