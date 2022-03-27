import React, { useState } from 'react';

import { HiSun, HiMoon, HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

import styles from "./Navbar.module.css";

const Navbar = () => {

    const [checked, setChecked] = useState(false);
    const [profileClicked, setprofileClicked] = useState(false);

    return (
        <>
            <div className={styles.navbar}>
                <h1>Little <span>PROJECTS</span></h1>

                <div className={styles.icons}>
                    <span><HiHome /></span>
                    <span onClick={() => setprofileClicked(!profileClicked)}><BsFillPersonFill /></span>
                </div>

                <div className={styles.themeSwitch} onClick={() => setChecked(!checked)}>
                    <span className={checked ? styles.themeSwitchToggleLight : styles.themeSwitchToggleDark}>
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