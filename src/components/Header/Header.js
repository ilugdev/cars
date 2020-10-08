import React from "react";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <b>CARS</b>
      </h1>

      <ul className={styles.social}>
        <li className={styles.socialItem}>
          <a
            href="https://www.instagram.com/awesome_cars972/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <b>I</b>
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="https://wa.me/+584148849444?text=Estoy%20interesado%20en%20un%20auto"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <b>W</b>
          </a>
        </li>
      </ul>
    </div>
  );
}
