import React, { useState, useEffect } from "react";
import marked from "marked";

import { client } from "services/client";

import styles from "./styles.module.css";

export default function LoadContent() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then(({ items }) => {
        items.forEach(({ fields }) => {
          setCars((prevCars) => [...prevCars, fields]);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <main className={styles.carsContainer}>
      {cars.length > 0 ? (
        cars.map(({ carImage, carName, description }) => (
          <div key={carName} className={styles.carCard}>
            <figure>
              <img src={carImage.fields.file.url} alt={carName} />
            </figure>
            <h1>{carName}</h1>
            <div
              className={styles.carData}
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
          </div>
        ))
      ) : (
        <div className={styles.carCardLoading}>Loading...</div>
      )}
    </main>
  );
}
