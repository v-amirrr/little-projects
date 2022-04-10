import React from 'react';

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarName}>
                   <h1>Little <span>PROJECTS</span></h1>
                </div>
            </div>
        </>
    );
};

export default Navbar;