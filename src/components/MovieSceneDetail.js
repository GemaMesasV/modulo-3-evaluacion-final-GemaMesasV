import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';


function MovieSceneDetail(props) {

	const {movieTitle} = useParams();
	const {movieList} = props

	const movie = movieList.find(movie => movie.movie === movieTitle)


	return (
		<section>
			<img
				className=''
				src=""
				alt=""
				title='poster'
			/>
			<section>
				<div>
					<h2>{movie.movie}</h2>
					<h3>by director</h3>

					<p>frase peli</p>
				</div>
				<nav>
					<Link to={'/'}>
						<p className='movieScene__linkHome'> Volver al listado de pelis</p>
					</Link>

					<button>
						<a
							className=''
							href=""
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