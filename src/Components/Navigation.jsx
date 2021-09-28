import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation({ number, content }) {
    return (
        <div className={styles.navigation}>
            <h1>NUMBER GAME</h1>
            <div className={styles.navigationButttonContainer}>
                <Link to='/'><button className={styles.navigationButton}>Home</button></Link>
                <Link to='/game'><button className={styles.navigationButton}>Game</button></Link>
            </div>
        </div>
    )
}
export default Navigation;