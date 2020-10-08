import React from "react";

import Filter from "components/Filter";

import styles from "./styles.module.css";

export default function FiltersSection() {
  return (
    <section className={styles.filterSection}>
      <h1 className={styles.filterTitle}>Buscar por</h1>
      <div className={styles.filtersContainer}>
        <Filter data="camionetas" />
        <Filter data="carros" />
        <Filter data="deportivos" />
      </div>
    </section>
  );
}
