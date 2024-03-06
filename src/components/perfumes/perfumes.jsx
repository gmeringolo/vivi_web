import React from "react";
import styles from "./perfumes.module.css";
import sexy from "./521-sexy.jpg";

function Perfumes() {
  return (
    <>
      <div className={styles.textoPerfumes} id="Perfumes">
        <div className={styles.perfumes}>
              <img
              src={sexy}
              className={styles.imgPerfumes}
              alt="521-sexy"
              />

        </div>
      </div>
    </>
  );
}

export default Perfumes;
