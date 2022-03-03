import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.navBar}>
                <li>
                    Completed tasks
                </li>
                <li>
                    SecondItem
                </li>
                <li>
                    ThirdItem
                </li>
            </ul>
            <h1 className={classes.logo}>To do list</h1>
        </header>
    );
};

export default Header;