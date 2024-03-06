import React from "react";
import styles from  "./header.module.css";
import logo from "./LogoViviHeader.png";


function Header() {
  return (
    <>
        <div className={styles.header}>
            <a href="/">
                <img src={logo} className={styles.logo} alt="Viviana Castro" />
            </a>
        </div>
          <div className={styles.section}>
            <h1>Catálogo Perfules Amakha París</h1>
          </div>
    </>
  );
}

export default Header;
