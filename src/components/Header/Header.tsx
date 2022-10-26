import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.scss";
import refreshIcon from "../../img/refresh.svg";
import hackerIcon from "../../img/hacker.png";
import arrowIcon from "../../img/back-arrow.svg";
import { IconButton } from "../IconButton/IconButton";

interface HeaderProps {
  refreshHandler: () => void,
  showGoBackButton: boolean,
}

export const Header: FC<HeaderProps> = function ({ refreshHandler, showGoBackButton }) {
  const history = useHistory();
  const redirectToMainPage = () => history.push("/");

  return (
    <header className={styles.header}>
      <button type="button" className={styles.header__title} onClick={redirectToMainPage}>
        <img src={hackerIcon} alt="hacker icon" />
        <h1>Hacker News</h1>
      </button>
      <div className={[styles.header__buttons, styles.buttons].join(" ")}>
        {showGoBackButton && <IconButton icon={arrowIcon} alt="go back arrow icon" onClick={redirectToMainPage} />}
        <IconButton icon={refreshIcon} alt="refresh icon" onClick={refreshHandler} />
      </div>
    </header>
  );
};
