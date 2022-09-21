import React from "react"
const IMAGE_API="https://image.tmdb.org/t/p/w1280"
const Movie=(props)=>
{
    return(<div className="movie">
<img src={!props.poster_path ? "undefined.jpg" : IMAGE_API + props.poster_path} alt={props.title} />
<div className="movie-info">
    <h3>{props.title}</h3>
    <span>{props.vote_average}</span>
</div>
<div className="movie-over">
    <h2>Overview:</h2>
    <p>{props.overview}</p>
</div>
</div>)

}
export default Movie