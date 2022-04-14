import React from 'react';

import styles from "./LittleProject7.module.css";

import { BsFillAlarmFill, BsFillChatFill, BsFillCloudArrowDownFill, BsFillDice6Fill } from "react-icons/bs";

const LittleProject7 = () => {
    return (
        <>
            <div className={styles.littleProject7}>
                <div className={styles.navigation}>
                    <div className={styles.navBtn}>
                        <i className={styles.navBtnIcon}><BsFillAlarmFill /></i>
                        <span className={styles.navBtnText}>Alarm</span>
                    </div>

                    <div className={styles.navBtn}>
                        <i className={styles.navBtnIcon}><BsFillChatFill /></i>
                        <span className={styles.navBtnText}>Chat</span>
                    </div>

                    <div className={styles.navBtn}>
                        <i className={styles.navBtnIcon}><BsFillCloudArrowDownFill /></i>
                        <span className={styles.navBtnText}>Upload</span>
                    </div>

                    <div className={styles.navBtn}>
                        <i className={styles.navBtnIcon}><BsFillDice6Fill /></i>
                        <span className={styles.navBtnText}>Dice</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LittleProject7;