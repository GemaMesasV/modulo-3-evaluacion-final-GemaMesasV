import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';


function MovieSceneDetail(props) {

	const {movieTitle} = useParams();
	const {movieList} = props

	const movie = movieList.find(movie => movie.movie === movieTitle)

	if(movieList.length === 0) {
		return <div>Loading...</div>
	}

	return (
		<section>
			<img
				className="movie__list-item-poster"
				src={movie.poster}
				alt={movie.movie}
				title='poster'
			/>
			<section>
				<div>
					<h2>{movie.movie}</h2>
					<h3>by {movie.director}</h3>

					<p>{movie.full_line}</p>
				</div>
				<nav>
					<Link to={'/'}>
					<button>
						<p className='movieScene__linkHome'> Back to the movie list</p>
					</button>
					</Link>

					<button>
						<a
							className=''
							href={movie.audio}
							target='_blank'
							rel='noreferrer'
						>
							Audio
						</a>
					</button>
				</nav>
			</section>
		</section>
	);
}

export default MovieSceneDetail;