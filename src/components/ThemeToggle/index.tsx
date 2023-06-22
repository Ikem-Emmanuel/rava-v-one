"use client"

import React, { useContext } from "react";
import styles from "./themetoggle.module.css";
import { ThemeContext } from "@/Context/ThemeContext";
// import ThemeToggle from './index';

const ThemeToggle = () => {
    const { mode, dispatch } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={() => dispatch({type:"CHANGE_THEME"})}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode.theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ThemeToggle;