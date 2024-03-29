import React from "react";
import styles from "./amakha.module.css";
import Perfumes from "../components/perfumes/perfumes";
import Header from "../components/headerPerfumes/HeaderPerf";



function amakha() {
  return (
    <>
    <div className={styles.container}><Header /></div>
      
      <Perfumes />
    </>
  );
}
export default amakha;
