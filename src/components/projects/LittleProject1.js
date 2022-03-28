import React from 'react';

import { SiGmail, SiTelegram, SiLinkedin, SiWhatsapp } from "react-icons/si";

import styles from "./LittleProject1.module.css";

const LittleProject1 = () => {
    return (
        <div className={styles.littleProject1}>
            <button className={styles.littleProject1Btn}>
                <div className={styles.btnText}>Share!</div>
                
                <div className={styles.btnIcon}>
                    <span><SiGmail /></span>
                    <span><SiTelegram /></span>
                    <span><SiLinkedin /></span>
                    <span><SiWhatsapp /></span>
                </div>
            </button>
        </div>
    );
};

export default LittleProject1;