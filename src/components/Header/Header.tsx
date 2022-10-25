import React, { FC } from 'react';
import styles from './Header.module.scss';
import refreshIcon from '../../img/refresh.svg';
import hackerIcon from '../../img/hacker.png';
import arrowIcon from '../../img/back-arrow.svg';
import IconButton from '../IconButton/IconButton';
import { Redirect, useHistory } from 'react-router-dom';
import { ROUTES } from '../../consts/routes';

interface HeaderProps {
    refreshHandler: () => void,
    showGoBackButton: boolean,
}

const Header: FC<HeaderProps> = ({refreshHandler, showGoBackButton}) => {
    let history = useHistory();
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]} onClick={ () => history.push("/") }>
                <img src={hackerIcon} alt="hacker icon" />Hacker News
            </h1>
            <div className={[styles["header__buttons"], styles["buttons"]].join(" ")}>
            {showGoBackButton && <IconButton icon={arrowIcon} alt="go back arrow icon" onClick={ () => history.push("/") } />}
            <IconButton icon={refreshIcon} alt="refresh icon"  onClick={refreshHandler}/>
            </div>
        </header>
    );
};

export default Header;