const MovieList = (props) => {
    // const FavouriteComponent = props.favouriteComponentIcon
    return (
        <div className="main-container-movie-gallery">
            <div className="gallery-wrapper">
                < div className="gallery-image-wrapper" >
                    {
                        props.movies.map((movie, index) => (
                            <span className="movie-card" key={index}>
                                <div className="gallery-image"><img src={movie.Poster} alt="not found" /></div>
                                {/* <div
                            onClick={() => props.handleFavourites(movie)}
                            className="favourite-button"
                        >
                            < FavouriteComponent />
                        </div> */}
                            </span>
                        ))
                    }
                </div>
            </div >
        </div>
    )
}
export default MovieList

    // < div className = "gallery-image" > </div >