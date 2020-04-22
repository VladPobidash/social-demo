import preloader from "../../../assects/images/preloader.svg";
import styles from "./preloader.module.css";
import React from "react";

let Preloader = props => {
    return <div className={styles.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader;