import React from "react";
import styles from "./perfumes.module.css";
import sexy from "./img/Mob1-521-sexy.jpg";
import vip from "./img/Mob2-521-viprose.jpg";
import woman from "./img/Mob3-521-woman.jpg";
import addictive from "./img/Mob4-Addictive.jpg";
import agua from "./img/Mob5-AguasMar.jpg";
import akwoman from "./img/Mob6-AkWoman.jpg";
import angelina from "./img/Mob7-Angelina.jpg";
import athena from "./img/Mob8-Athena.jpg";
import attractive from "./img/Mob9-Attractive.jpg";
import classica from "./img/Mob10-Classica.jpg";
import green from "./img/Mob11-GreenApple.jpg";
import hypnotize from "./img/Mob12-hypnotize.jpg";
import jetaime from "./img/Mob13-Jetaime.jpg";
import love from "./img/Mob14-Love.jpg";
import summer from "./img/Mob15-Summer.jpg";

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
        <img
          src={vip}
          className={styles.imgPerfumes}
          alt="521-vip rosé"
        />
        <img
          src={woman}
          className={styles.imgPerfumes}
          alt="521-woman"
        />
        <img
          src={addictive}
          className={styles.imgPerfumes}
          alt="Addictive"
        />
        <img
          src={agua}
          className={styles.imgPerfumes}
          alt="Aguas Marinhas"
        />
        <img
          src={akwoman}
          className={styles.imgPerfumes}
          alt="Ak Woman"
        />
        <img
          src={angelina}
          className={styles.imgPerfumes}
          alt="Angelina"
        />
        <img
          src={athena}
          className={styles.imgPerfumes}
          alt="Athena"
        />
         <img
          src={attractive}
          className={styles.imgPerfumes}
          alt="Attractive"
        />
        <img
          src={classica}
          className={styles.imgPerfumes}
          alt="Classica"
        />
        <img
          src={green}
          className={styles.imgPerfumes}
          alt="Green apple"
        />
        <img
          src={hypnotize}
          className={styles.imgPerfumes}
          alt="Hypnotize"
        />
        <img
          src={jetaime}
          className={styles.imgPerfumes}
          alt="Jetaime"
        />
        <img
          src={love}
          className={styles.imgPerfumes}
          alt="Love"
        />
        <img
          src={summer}
          className={styles.imgPerfumes}
          alt="Summer Flowers"
        />
      </div>
    </>
  );
}

export default Perfumes;
