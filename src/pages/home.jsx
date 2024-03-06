import React from "react";
import styles from "./home.module.css";
import Inicio from "../components/inicio/inicio";
import icono from "./icono.png";

function home() {
  return (
    <>
      <Inicio />
      <div className={styles.containerBoton}>
        <a
          href="https://wa.me/+59896269002?text=Para%20consultar%20disponibilidad,%20indicar%20fecha%20de%20entrada%20y%20salida"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.boton} src={icono} alt="" />
        </a>
      </div>

    </>
  );
}
export default home;
