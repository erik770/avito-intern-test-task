import React from 'react';
import styles from './Header.module.scss';
import refreshIcon from '../../img/refresh.svg';
import hackerIcon from '../../img/hacker.png';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>
                <img src={hackerIcon} alt="hacker icon" />Hacker News
            </h1>
            <div className={[styles["header__icons"], styles["icons"]].join(" ")}>
                <div className={styles["icons__refresh"]}>
                    <img src={refreshIcon} alt="refresh icon" />
                </div>
            </div> 
        </header>
    );
};

export default Header;