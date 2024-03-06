import React from "react";
import styles from "./inicio.module.css";
import salvica from "./salvica.png";
import logoamakha from "./Logo_Amakha.png";



function Inicio() {
  return (
    <>
      <div className={styles.logos}>
        <a           
          href="/salvica"
          target="_blank"
          rel="noreferrer"
          >
            <img
            src={salvica}
            className={styles.imgLogos}
            alt="Logo Salvica"
            />
        </a>
        <a           
          href="/amakhaParis"
          target="_blank"
          rel="noreferrer"
          >
            <img
            src={logoamakha}
            className={styles.imgLogos}
            alt="Logo Salvica"
            />
        </a>
      </div>
    </>
  );
}

export default Inicio;
