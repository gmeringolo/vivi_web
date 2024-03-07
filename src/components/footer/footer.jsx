import React from "react";
import styles from "./footer.module.css";
import logo from "./LogoViviW.png";
import Ig from "./instagram.svg";
import Face from "./facebook.svg";
import Whats from "./whatsapp.svg";


function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contacto}>
          <a href="/" className={styles.contacto_enlace}>
            <img src={logo} alt="Viviana Castro" />
          </a>
          <div className={styles.contacto_redes}>
            <a href="https://www.instagram.com/posadahorizonte/" target="_blanck" className={styles.instagram}>
              <img src={Ig} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/posadahorizonte" target="_blanck" className={styles.facebook}>
              <img src={Face} alt="facebook" />
            </a>
            <a href="https://wa.me/+59899667726?text=Para%20consultar%20disponibilidad,%20indicar%20fecha%20de%20entrada%20y%20salida" target="_blanck" className={styles.whatsapp}>
              <img src={Whats} alt="whatsapp" />
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Copyright© 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
