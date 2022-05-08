import MovieSceneItem from "./MovieSceneItem";
function MovieSceneList(props) {
  if (props.movieList.length === 0) {
    return (
      <p className="error-message">Woops! There is not wovie with that wame!</p>
    );
  }
  return (
    <ul className="movie__list">
      {props.movieList.map((movie) => (
        <MovieSceneItem movie={movie} />
      ))}
    </ul>
  );
}

export default MovieSceneList;
