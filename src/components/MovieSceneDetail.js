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
		<section className='movie-card'>
			<img
				className="movie-card__poster"
				src={movie.poster}
				alt={movie.movie}
				title='poster'
			/>
			<section className='movie-info'>
				<div>
					<h2 className='movie-title'>{movie.movie}</h2>
					<h3 className='movie-director'>by {movie.director}</h3>

					<p className='movie-line'>{movie.full_line}</p>
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