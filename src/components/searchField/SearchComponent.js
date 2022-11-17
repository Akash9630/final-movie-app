import { useEffect, useState } from "react";
import "./SearchComponentStyles.css";
import AddFavouriteIcon from "./components/AddFavouriteIcon";
import MovieList from "./components/MovieList";
// import RemoveFavouriteIcon from "./components/RemoveFavouriteIcon";
import HeaderComponent from "../header/navbar/HeaderComponent";


function SearchComponent() {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [favourites, setFavourites] = useState([])
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4df45d13`

        const response = await fetch(url)
        const responseJson = await response.json()

        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue])

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const AddFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList);

    }
    // const RemoveFavouriteMovie = (movie) => {
    //     const newFavouriteList = favourites.filter(
    //         (favourite) => favourite.imdbID !== movie.imdbID
    //     )
    //     setFavourites(newFavouriteList);
    //     saveToLocalStorage(newFavouriteList);
    // }

    return (
        <div>
            <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="row-x">
                <MovieList
                    movies={movies}
                    handleFavourites={AddFavouriteMovie}
                    favouriteComponentIcon={AddFavouriteIcon}
                />
            </div>
        </div>
    );
}
export default SearchComponent;