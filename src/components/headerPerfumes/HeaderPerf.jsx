import React from "react";
import styles from "./headerPerf.module.css";
import logo from "./LogoViviW.png";
import Ig from "./instagram.svg";
import Face from "./facebook.svg";
import Whats from "./whatsapp.svg";


function Header() {
    return (
        <>
            <div className={styles.header}>
                <a href="/">
                    <img src={logo} className={styles.logo} alt="Viviana Castro" />
                </a>
                <div className={styles.contacto_redes}>
                    <a href="https://www.instagram.com/viviana.castrosequeira" target="_blanck" className={styles.instagram}>
                        <img src={Ig} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/viviana.castrosequeira" target="_blanck" className={styles.facebook}>
                        <img src={Face} alt="facebook" />
                    </a>
                    <a href="https://wa.me/+59898873697?" target="_blanck" className={styles.whatsapp}>
                        <img src={Whats} alt="whatsapp" />
                    </a>
                </div>
            </div>

        </>
    );
}

export default Header;