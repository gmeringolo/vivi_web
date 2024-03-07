import React from "react";
import styles from "./perfumes.module.css";
import sexy from "./img/Mob-512-sexy.jpg";

function Perfumes() {
  return (
    <>
      <div className={styles.perfumes} id="Perfumes">
        <h1>Catálogo Perfumes Amakha París</h1>
        <img
          src={sexy}
          className={styles.imgPerfumes}
          alt="521-sexy"
        />
      </div>
    </>
  );
}

export default Perfumes;
