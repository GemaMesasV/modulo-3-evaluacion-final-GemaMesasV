function MovieSceneList(props) {
  return (
    <ul className="movie_list">
      {props.movieList.map((movie) => (
        <li className="movie_list_item">
          <img className="movie_poster" src={movie.poster} alt={movie.movie} />
          {movie.movie}
          {movie.year}
          {movie.full_line}
        </li>
      ))}
    </ul>
  );
}

export default MovieSceneList
