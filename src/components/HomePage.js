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
                <button><Link to={"/projects/3"}>Project 3</Link></button>
                <button disabled><Link to={""}>Project 8</Link></button>
                <button><Link to={"/projects/4"}>Project 4</Link></button>
                <button disabled><Link to={""}>Project 9</Link></button>
                <button disabled><Link to={""}>Project 5</Link></button>
                <button disabled><Link to={""}>Project 10</Link></button>
            </div>
        </>
    );
};

export default HomePage;


// project 1 idea: https://www.instagram.com/p/CFNCLkFIJ0G/?utm_medium=copy_link
// project 2 idea: https://www.instagram.com/p/CZCjqRrI_zt/?utm_source=ig_web_copy_link
// project 3 idea: https://www.instagram.com/tv/CbkubF5Ictd/?utm_source=ig_web_copy_link
// project 4 idea: https://www.instagram.com/p/CX6Vx6kvbz8/?utm_source=ig_web_copy_link
// project 5 idea: 