import React from "react";

import styles from "./styles.module.css";

export default function Filter({ data }) {
  return <button className={styles.filter}>{data}</button>;
}
