import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <>
            <div className={styles.homePage}>
                <button><Link to={"/projects/1"}>Project 1</Link></button>
                <button disabled><Link to={""}>Project 6</Link></button>
                <button><Link to={"/projects/2"}>Project 2</Link></button>
                <button disabled><Link to={""}>Project 7</Link></button>
                <button disabled><Link to={""}>Project 3</Link></button>
                <button disabled><Link to={""}>Project 8</Link></button>
                <button disabled><Link to={""}>Project 4</Link></button>
                <button disabled><Link to={""}>Project 9</Link></button>
                <button disabled><Link to={""}>Project 5</Link></button>
                <button disabled><Link to={""}>Project 10</Link></button>
            </div>
        </>
    );
};

export default HomePage;