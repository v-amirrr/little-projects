import React, {useState} from 'react';

import styles from "./LittleProject2.module.css";

const LittleProject2 = () => {

    const [step, setStep] = useState(0);

    return (
        <>
            <div className={styles.littleProject2}>
                <div className={styles.progressContainer}>
                    <div className={styles.progress}>
                        <div className={styles.progress2} style={{width: `${step}%`}}></div>
                        <div className={styles.circles}>
                            <div className={styles.circle}>1</div>
                            <div className={styles.circle}>2</div>
                            <div className={styles.circle}>3</div>
                            <div className={styles.circle}>4</div>
                        </div>
                    </div>
                </div>

                <div className={styles.progressButtons}>
                    <button onClick={() => step > 0 && setStep(step - 25)} disabled={step == 0 && true}>Previous</button>
                    <button onClick={() => step < 75 && setStep(step + 25)} disabled={step == 75 && true}>Next</button>
                </div>
            </div>
        </>
    );
};

export default LittleProject2;