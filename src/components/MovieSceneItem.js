import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
	return (
		<li className="movie_list_item">
			<Link to={`/detail/${props.movie.movie}`}>
				<img className="movie_poster"
					src={props.movie.poster}
					alt={props.movie.movie}
					title='poster'
				/>
				{props.movie.movie}
				{props.movie.year}
				{props.movie.full_line}
			</Link>
		</li>
	);
}

export default MovieSceneItem;