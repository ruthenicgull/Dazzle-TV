import React from "react";
import styles from "./Card.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Card({ imagePath, movieName, isLarge }) {
  return (
    <div className={styles.container}>
      {isLarge ? (
        <>
          <img className={styles.long_poster} src={imagePath} alt={movieName} />
          <div className={styles.long_overlay}>
            <PlayCircleIcon className={styles.center_play_button} />
          </div>
        </>
      ) : (
        <>
          <img className={styles.wide_poster} src={imagePath} alt={movieName} />
          <div className={styles.wide_overlay}>
            <h5 className={styles.title}>{movieName}</h5>
            <PlayCircleIcon className={styles.wide_play_button} />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
