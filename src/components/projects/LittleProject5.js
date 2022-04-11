import React from 'react';

import styles from "./LittleProject5.module.css";

import { BsFillAlarmFill, BsFillChatFill, BsFillCloudArrowDownFill, BsFillDice6Fill } from "react-icons/bs";

const LittleProject5 = () => {
    return (
        <>
            <div className={styles.littleProject5}>
                <div className={styles.navigation}>
                    <div><BsFillChatFill /></div>
                    <div><BsFillAlarmFill /></div>
                    <div><BsFillCloudArrowDownFill /></div>
                    <div><BsFillDice6Fill /></div>
                </div>
            </div>
        </>
    );
};

export default LittleProject5;