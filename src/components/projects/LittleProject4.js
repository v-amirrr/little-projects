import React, { useState } from 'react';

import styles from "./LittleProject4.module.css";

const LittleProject4 = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={styles.littleProject4}>
                <div className={styles.button}>
                    <button onClick={() => setOpen(!open)}>Open</button>
                </div>

                <div className={open ? styles.popupOpen : styles.popupClose}>
                    <p>Pop Up</p>
                    <button onClick={() => setOpen(!open)}>Close</button>
                </div>
            </div>
        </>
    );
};

export default LittleProject4;