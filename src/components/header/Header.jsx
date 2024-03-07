import React from "react";
import styles from  "./header.module.css";
import logo from "./LogoViviW.png";


function Header() {
  return (
    <>
        <div className={styles.header}>
            <a href="/">
                <img src={logo} className={styles.logo} alt="Viviana Castro" />
            </a>
        </div>

    </>
  );
}

export default Header;
