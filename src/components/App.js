import "../styles/App.scss";
import "../styles/Reset.scss";
import "../styles/Header.scss";
import "../styles/MovieSceneDetail.scss";

import header from "../images/header.jpg";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import MovieFilters from "./MovieFilters";

import localStorage from "../services/localStorage";

// Función para quitar valores repetidos
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function App(props) {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovieTitle, setFilterMovieTitle] = useState(
    localStorage.get("filterMovieTitle", "")
  );
  const [filterMovieCharacter, setFilterMovieCharacter] = useState(
    localStorage.get("filterMovieTitle", "")
  );
  const [filterMovieYear, setFilterMovieYear] = useState("");
  const yearList = dataMovies
    .map((movie) => movie.year)
    .filter(onlyUnique)
    .sort();
  let filteredMovieList = dataMovies;

  // Fetch
  useEffect(() => {
    fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50")
      .then((response) => response.json())
      .then((responseData) => {
        setDataMovies(responseData);
      });
  }, []);

  // Función para buscar por película
  function handleChangeTitle(e) {
    localStorage.set("filterMovieTitle", e.target.value);
    setFilterMovieTitle(e.target.value);
  }

   // Función para buscar por personaje
   function handleChangeCharacter(e) {
    localStorage.set("filterMovieTitle", e.target.value);
    setFilterMovieCharacter(e.target.value);
  }

  // Función para buscar por año
  function handleChangeYear(e) {
    setFilterMovieYear(e.target.value);
  }

  //Aplicamos filtros
  if (filterMovieTitle) {
    filteredMovieList = filteredMovieList.filter((movie) =>
      movie.movie.toLowerCase().includes(filterMovieTitle.toLowerCase())
    );
  }

  if (filterMovieCharacter) {
    filteredMovieList = filteredMovieList.filter((movie) =>
      movie.character.toLowerCase().includes(filterMovieCharacter.toLowerCase())
    );
  }

  if (filterMovieYear) {
    filteredMovieList = filteredMovieList.filter(
      (movie) => parseInt(filterMovieYear) === movie.year
    );
  }
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={
            <>
              <header className="header">
                <h1 className="header__title">The Wowenator</h1>
                <img
                  className="header__logo"
                  src={header}
                  alt="Imagen de portada"
                />
                <MovieFilters
                  filterMovie={filterMovieTitle}
                  filterMovieYear={filterMovieYear}
                  filterMovieCharacter={filterMovieCharacter}
                  handleChangeCharacter={handleChangeCharacter}
                  yearList={yearList}
                  handleChangeTitle={handleChangeTitle}
                  handleChangeYear={handleChangeYear}
                />
              </header>
              <main>
                <MovieSceneList movieList={filteredMovieList} />
              </main>
            </>
          }
        />
        <Route
          path="/detail/:movieTitle"
          element={<MovieSceneDetail movieList={filteredMovieList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
