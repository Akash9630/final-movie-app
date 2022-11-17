import MovieCardComponent from "../moviecard/MovieCardComponent";
import "./MovieList.css";
const MovieListComponent = (props) => {
    return (
        <div className="main">
            <div className="section">
                <div className='movie-list'>
                    {props.movies.map((item, index) => (
                        <MovieCardComponent key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>

    );
}
export default MovieListComponent
