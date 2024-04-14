import React from "react";
import styles from "./Banner.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  return (
    <header
      className={styles.container}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner_items}>
        <h1 className={styles.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <button className={styles.play_button}>
          <PlayArrowIcon />
          Play
        </button>
        <p className={styles.description}>{movie?.overview}</p>
      </div>
      <div className={styles.fade_bottom}></div>
    </header>
  );
}

export default Banner;
