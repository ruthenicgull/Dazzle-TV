import React from "react";
import styles from "./Banner.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Banner() {
  return (
    <header
      className={styles.container}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQd2_TAKVVSh49tvLxy4G30vLEbyGerbS__xeBNtQppqEbGdlCKVB_YBJr2yIpjxzSJ33NWjDERifUw2EenYNwOih_TiogEo60gEYsxjh4yHcUhrvwNGAqOQ_MZ3XuQgTu2T-NAFwbzpyV8Z-dd47-iNTQWY.jpg?r=960")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner_items}>
        <h1 className={styles.title}>The Witcher</h1>
        <button className={styles.play_button}>
          <PlayArrowIcon />
          Play
        </button>
        <p className={styles.description}>
          Geralt of Rivia, a mutated monster-hunter for hire, journeys toward
          his destiny in a turbulent world where people often prove more wicked
          than beasts.
        </p>
      </div>
      <div className={styles.fade_bottom}></div>
    </header>
  );
}

export default Banner;
