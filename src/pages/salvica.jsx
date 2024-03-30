import React from "react";
import styles from "./salvica.module.css";
import icono from "./icono.png";
import Header from "../components/headerPerfumes/HeaderPerf";
import sal from "./img/PrecioSalRosa.jpg";
import azucar from "./img/PrecioAzucar.jpg";
import salNegra from "./img/PrecioSalNegra.jpg";

function salvica() {
  return (
    <>
      <div className={styles.header}><Header /></div>
      <div className={styles.precios} >
        <img
          src={sal}
          className={styles.imgPrecios}
          alt="Precios-SalHimalaya"
        />
        <img
          src={salNegra}
          className={styles.imgPrecios}
          alt="Precios-SalNegra"
        />
        <img
          src={azucar}
          className={styles.imgPrecios}
          alt="Precios-AzucarMascabo"
        />
      </div>

      <div className={styles.containerBoton}>
        <a
          href="https://wa.me/+59898873697?"
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
