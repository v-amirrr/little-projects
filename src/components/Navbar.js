import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { HiSun, HiMoon, HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

import styles from "./Navbar.module.css";

const Navbar = () => {

    const [checked, setChecked] = useState(false);
    const [profileClicked, setprofileClicked] = useState(false);

    useEffect(() => {
        (() => {
            checked ? 
            document.documentElement.setAttribute("data-theme", "light")
            :
            document.documentElement.setAttribute("data-theme", "dark")
        }) ();
    }, [checked]);

    return (
        <>
            <div className={styles.navbar}>
                <h1>Little <span>PROJECTS</span></h1>

                <div className={styles.icons}>
                    <Link to="/">
                        <span><HiHome /></span>
                    </Link>
                    
                    <Link to="/profile">
                        <span onClick={() => setprofileClicked(!profileClicked)}><BsFillPersonFill /></span>
                    </Link>
                </div>

                <div className={styles.themeSwitch} onClick={() => setChecked(!checked)}>
                    <span className={styles.themeSwitchToggle}>
                        <span className={checked ? styles.lightToggle : styles.darkToggle}>
                            <HiSun className={checked ? styles.iconLightActive : styles.iconLight} />
                            <HiMoon className={checked ? styles.iconDark : styles.iconDarkActive} />
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;