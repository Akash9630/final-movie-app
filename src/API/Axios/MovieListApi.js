import { LOAD_MOVIES_ERROR, LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS } from "../Actions/MovieListAction"
import axios from "axios"

const movieListApiUrl = "https://www.omdbapi.com/?s=avengers&apikey=4df45d13"
export const loadMovies = () => dispatch => {
    dispatch({
        type: LOAD_MOVIES_LOADING,
        payload: {
            show: true,
        },
    });
    axios.get(movieListApiUrl)
        .then((res) => {
            const movieList = res.data;
            dispatch({
                type: LOAD_MOVIES_SUCCESS,
                movies: movieList
            })
        })
        .catch((error) => {
            console.error(error);
        })
}