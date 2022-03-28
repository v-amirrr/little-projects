import React from 'react';

import { SiGithub, SiGmail, SiTelegram, SiWhatsapp} from "react-icons/si";

import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
    return (
        <>
            <div className={styles.profilePage}>
                <div className={styles.profilePageName}>
                    <h1>AMIR</h1><span>Front-End Developer</span>
                </div>

                <div className={styles.profilePageIcons}>
                    <a target='_blank' rel='noreferrer' href='https://amirrr.valizadeh@gmail.com'>
                        <span><SiGmail /></span>
                    </a>

                    <a target='_blank' rel='noreferrer' href='https://github.com/v-amirrr'>
                        <span><SiGithub /></span>
                    </a>

                    <a target='_blank' rel='noreferrer' href='https://t.me/v_amirrr'>
                        <span><SiTelegram /></span>
                    </a>

                    <a target='_blank' rel='noreferrer' href='https://wa.me/+989330938960'>
                        <span><SiWhatsapp /></span>
                    </a>
                </div>

            </div>
        </>
    );
};

export default ProfilePage;