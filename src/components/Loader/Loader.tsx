import React from "react";
import styles from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.container__spinner} />
    </div>
  );
}
