import React from "react";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import REQUESTS from "./requests";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"Netflix Orignals"}
        fetchUrl={REQUESTS.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={REQUESTS.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={REQUESTS.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={REQUESTS.fetchActionMovies} />
      <Row title={"Horror Movies"} fetchUrl={REQUESTS.fetchHorrorMovies} />
      <Row title={"Comedy Movies"} fetchUrl={REQUESTS.fetchComedyMovies} />
      <Row title={"Romance Movies"} fetchUrl={REQUESTS.fetchRomanceMovies} />
      <Row title={"Documantries"} fetchUrl={REQUESTS.fetchDocumantries} />
    </div>
  );
}

export default App;
