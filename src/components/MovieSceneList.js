import MovieSceneItem from './MovieSceneItem';
function MovieSceneList(props) {
  return (
    <ul className="movie_list">
      {props.movieList.map((movie) => (
        <MovieSceneItem movie={movie}/>
      ))}
    </ul>
  );
}

export default MovieSceneList;
