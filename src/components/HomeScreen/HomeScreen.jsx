import React from "react";
import styles from "./HomeScreen.module.css";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../requests";

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="TRENDING" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
