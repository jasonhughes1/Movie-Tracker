import React from 'react';


const favoriteMovie = (id, movie) => {
  const { title, release_date, poster_path, vote_average, overview } = movie;



  return {  user_id: id,
            title,
            release_date,
            poster_path,
            vote_average,
            overview,
            movie_id: movie.movie_id || movie.id
  }
}

const handleClick = (id, movie, favoritesDB, deleteFavorite, addFavorite) => {
  const cleanFavorite = favoriteMovie(id, movie);
  console.log('cleanfavorite: ', cleanFavorite);
  const indexOfFavorites = favoritesDB.findIndex(favorite => favorite.movie_id === cleanFavorite.movie_id);

  return indexOfFavorites !== -1
         ? deleteFavorite(favoriteMovie(id, movie))
         : addFavorite(favoriteMovie(id, movie));
}

const MovieCard = ({ addFavorite, login, movie, deleteFavorite, favoritesDB, activeClass }) => {
const { title, release_date, poster_path, vote_average, overview } = movie;

  return(
    <article className='movie-card'>
      <button className={activeClass} onClick={() => handleClick(login.id, movie, favoritesDB, deleteFavorite, addFavorite)}>Add Favorite</button>
      <div className="header-container">
        <h3 className="title-card">{title}</h3>
        <p className="release-date-card">Release Date: {release_date}</p>
      <p className="vote-average">Rating: {vote_average}</p>
    </div>
      <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} - poster`} />
    </article>
  )
}

export default MovieCard;
