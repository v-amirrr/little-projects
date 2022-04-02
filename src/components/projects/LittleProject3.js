import React from 'react';

import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

import styles from "./LittleProject3.module.css";

const LittleProject3 = () => {
    return (
        <>
            <div className={styles.littleProject3}>
                <AwesomeButton size="large" type="primary">Button</AwesomeButton>
            </div>
        </>
    );
};

export default LittleProject3;