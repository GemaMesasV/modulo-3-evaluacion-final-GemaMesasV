import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieSceneDetail(props) {
  const { movieTitle } = useParams();
  const { movieList } = props;

  const movie = movieList.find((movie) => movie.movie === movieTitle);

  if (movieList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-container">
      <section className="movie-card">
        <img
          className="movie-card__poster"
          src={movie.poster}
          alt={movie.movie}
          title="poster"
        />
        <section className="movie-section">
          <div>
            <h2 className="movie-section__title">{movie.movie}</h2>
            <h3 className="movie-section__director">by {movie.director}</h3>

            <p className="movie-section__line">{movie.full_line}</p>
          </div>
          <nav className="nav-menu">
            <Link to={"/"}>
              <button className="btn">
                <p className="back-message"> Back to the wovie list</p>
              </button>
            </Link>

            <button className="btn">
              <a
                className="audio-message"
                href={movie.audio}
                target="_blank"
                rel="noreferrer"
              >
                Waudio
              </a>
            </button>
          </nav>
        </section>
      </section>
    </div>
  );
}

export default MovieSceneDetail;
