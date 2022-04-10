import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarName}>
                   <h1>Little <span>PROJECTS</span></h1>
                </div>
                <Link to="/">
                    <div className={location.pathname !== "/" ? styles.backBtn : styles.backBtnOff}>
                        <i><BsFillArrowLeftCircleFill /></i>
                        <span>Back To Home</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Navbar;