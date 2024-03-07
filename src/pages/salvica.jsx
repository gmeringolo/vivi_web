import React from "react";
import styles from "./salvica.module.css";
import icono from "./icono.png";
import Header from "../components/header/Header";

function salvica() {
  return (
    <> 
          <Header /> 
        <h1>Salvica</h1>      
      <div className={styles.containerBoton}>
        <a
          href="https://wa.me/+59898873697?text=Para%20consultar%20disponibilidad,%20indicar%20fecha%20de%20entrada%20y%20salida"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.boton} src={icono} alt="" />
        </a>
      </div>

    </>
  );
}
export default salvica;
