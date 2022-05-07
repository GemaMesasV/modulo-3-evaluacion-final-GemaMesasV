import '../styles/App.scss';
import '../styles/Reset.scss';
import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';


function App(props) {

  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState("");

  // Fetch
  useEffect(() => {
    fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50")
      .then((response) => response.json())
      .then((responseData) => {
        setDataMovies(responseData);
      });
  }, []);

// Función para buscar por película
  function handleChange(e) {
    setFilterMovie(e.target.value);
}

// Filtro por nombre de película

const filterMovieItem = dataMovies.filter((movie) => movie.movie.toLowerCase().includes(filterMovie.toLowerCase()));

  return (
    <div>
      <h1>Owen Wilson "wow"</h1>
      <fieldset>
        <label className='filter_box' htmlFor='name'>Movie</label>
        <input
          className='filter_box'
          type='text'
          name='text'
          id='name'
          placeholder='E.g.: Marmaduke'
          onChange={handleChange}
          value={filterMovie}
        />
      </fieldset>

      <ul className='movie_list'>
      {filterMovieItem.map(movie => (
        <li className='movie_list_item'>
          <img className='movie_poster' src={movie.poster} alt={movie.movie} />
          {movie.movie}
          {movie.year}
          {movie.full_line}
        </li>
      ))}
      </ul>
    
    </div>
  );
}

export default App;