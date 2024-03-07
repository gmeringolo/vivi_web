import React from "react";
import styles from "./logos.module.css";
import salvica from "./salvica.png";
import logoamakha from "./Logo_Amakha.png";



function Inicio() {
  return (
    <>
      <div className={styles.logos}>
        <a           
          href="/salvica"
          target="_self"
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
          target="_self"
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
