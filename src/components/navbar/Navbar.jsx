import React from "react";

import styles from "./navbar.module.css";
import logo2 from "./2.png";




function Navbar() {  

  return (
    <>
      <nav>        
        <a href="#inicio" className={styles.enlace}>
          <img src={logo2} className="logo" alt="logo posada" />
        </a>       
      </nav>
    </>
  );
}

export default Navbar;
