import React, { FC } from "react";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  icon: string,
  alt: string,
  onClick: () => void,
}

export const IconButton: FC<IconButtonProps> = function ({ icon, alt, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <img src={icon} alt={alt} />
    </button>
  );
};
