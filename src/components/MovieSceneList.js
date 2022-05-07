import MovieSceneItem from './MovieSceneItem';
function MovieSceneList(props) {
	if (props.movieList.length=== 0) {
		return (<p>Oops! There is not movie with that name!</p>)
		
	}
  return (
    <ul className="movie_list">
      {props.movieList.map((movie) => (
        <MovieSceneItem movie={movie}/>
      ))}
    </ul>
  );
}

export default MovieSceneList;
