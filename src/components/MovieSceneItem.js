function MovieSceneItem(props) {
    return (
    <li className="movie_list_item">
          <img className="movie_poster" src={props.movie.poster} alt={props.movie.movie} />
          {props.movie.movie}
          {props.movie.year}
          {props.movie.full_line}
        </li>
        );
    }

export default MovieSceneItem;