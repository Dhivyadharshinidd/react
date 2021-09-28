import React, { useState } from "react";
//import React from "react";
import styles from "./navigation.module.css";
import Navigation from "./Navigation";
function FirstParagraph(props) {


    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);
    const target = 10;


    return (
        <>
            <Navigation />
            <br></br>
            <h3 className={styles.heading}>NUMBER GAME</h3>
            <br></br>
            <h5 className={styles.head}>PLAYER 1</h5>
            <br></br>
            <p className={styles.para}>{number}</p>
            <br></br>
            <button className={styles.button} onClick={function () {
                if (number >= target) {

                    setNumber(number - number);

                } else {
                    setNumber(number + 1);
                }

            }}>+1 to Player 1</button>
            <br></br>
            {/* <p className={styles.para}>{print}</p> */}

            <br></br>
            <h5 className={styles.head}>PLAYER 2</h5>
            <br></br>
            <p className={styles.para1}>{number1}</p>
            <br></br>


            <button className={styles.button} onClick={function () {
                if (number1 >= target) {

                    setNumber1(number1 - number1);

                } else {

                    setNumber1(number1 + 1);
                }
            }}>+1 to Player 2</button>
            <br></br>
            {/* <p className={styles.para1}>{print1}</p> */}
            <br></br>
            <button className={styles.button} onClick={function () {
                setNumber(number - number);
                setNumber1(number1 - number1);
            }}>RESET</button>
            <br></br>
            <br></br>


            <p className={styles.para2}>By reaching 10, you will be redirected to 0 !!!</p>
        </>
    )
}
export default FirstParagraph;