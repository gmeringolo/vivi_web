import React from "react";
import styles from "./home.module.css";
import Logos from "../components/logos/logos";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import icono from "./icono.png";

function home() {
  return (
    <>
      <div className={styles.contenedor}>
        <Header />
        <Logos />
        <div className={styles.containerBoton}>
          <a
            href="https://wa.me/+59898873697?text=Para%20consultar%20disponibilidad,%20indicar%20fecha%20de%20entrada%20y%20salida"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.boton} src={icono} alt="" />
          </a>
        </div>
        <Footer />
      </div>

    </>
  );
}
export default home;
