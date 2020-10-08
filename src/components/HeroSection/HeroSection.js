import React from "react";

import styles from "./styles.module.css";

import camioneta from "assets/img/camioneta.png";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>Autos al mejor precio</h1>
      <img className={styles.carImg} src={camioneta} alt="camioneta" />
    </section>
  );
}
