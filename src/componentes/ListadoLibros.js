import { Link } from "react-router-dom";
import styles from "./Libreria.module.css";
import { libros } from "../data";
const Libros = () => {
  return (
    <>
      <div name="Libros" className={styles.listaLibro}>
         <h1>Libros</h1>
        {libros.map((e) => (
          <p key={e.id} className={styles.lista}>
            <img  className={styles.Image} src={e.image} alt={e.title} />
            <Link className={styles.libroLink} to={`/libros/${e.id}`}>{e.title}</Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Libros;