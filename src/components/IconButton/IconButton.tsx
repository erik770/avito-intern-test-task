import React, { FC } from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps {
    icon: string,
    alt: string,
    onClick: () => void,
}
const IconButton: FC<IconButtonProps> = ({icon, alt, onClick}) => {
    return (
        <button onClick={onClick} className={styles["button"]}>
            <img src={icon} alt={alt} />
        </button>
    );
};

export default IconButton;