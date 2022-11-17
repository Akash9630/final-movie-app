import "./MovieCard.css";
const MovieCardComponent = (props) => (
    <div className="card-container">
        <img
            src={props.item.Poster}
            alt="not found"
        />
        {/* <h1>{props.item.Title}</h1>
        <p>{props.item.Year}</p> */}
    </div>
);
export default MovieCardComponent