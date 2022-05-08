import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
	return (
		<li className="movie__list-item">
			<Link className='movie__list-item-card' to={`/detail/${props.movie.movie}`}>
				<img className="movie__list-item-poster"
					src={props.movie.poster}
					alt={props.movie.movie}
					title='poster'
				/>
				<p className='movie__list-item-title'>{props.movie.movie}</p>
				<p className='movie__list-item-year'>{props.movie.year}</p>
				<p className='movie__list-item-line'>{props.movie.full_line}</p>
			</Link>
		</li>
	);
}

export default MovieSceneItem;