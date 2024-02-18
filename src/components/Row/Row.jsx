import React from "react";
import styles from "./Row.module.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import Card from "../Card/Card";

function Row({ title, fetchURL, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchURL]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards_list}>
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              imagePath={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              movieName={movie?.name || movie?.title}
              isLarge={isLarge}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Row;
