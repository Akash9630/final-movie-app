import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from "../API/Axios/MovieListApi"
import HeaderComponent from "./header/navbar/HeaderComponent"
import MovieListComponent from "./movielist/MovieListComponent"
import SearchComponent from "./searchField/SearchComponent"

const Dashboard = () => {
    const movies = useSelector(store => {
        if (store.task.movieList?.Search) {
            return store.task.movieList.Search
        }
        else {
            return []
        }
    })

    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(loadMovies())
    }, [dispatcher])

    return (
        <>
            <HeaderComponent />
            <SearchComponent />
            <MovieListComponent movies={movies} />
        </>

    )
}
export default Dashboard

