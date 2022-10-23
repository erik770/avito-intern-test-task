import React from 'react';
import styles from './Header.module.scss';
import refreshIcon from '../../img/refresh.svg';
import hackerIcon from '../../img/hacker.png';
import arrowIcon from '../../img/back-arrow.svg';
import IconButton from '../IconButton/IconButton';
import { useHistory } from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>
                <img src={hackerIcon} alt="hacker icon" />Hacker News
            </h1>
            <div className={[styles["header__buttons"], styles["buttons"]].join(" ")}>
            <IconButton icon={arrowIcon} alt="go back arrow icon" onClick={ () => history.goBack() } />
            <IconButton icon={refreshIcon} alt="refresh icon"  onClick={ () => console.log("clicked") }/>
            </div>
        </header>
    );
};

export default Header;