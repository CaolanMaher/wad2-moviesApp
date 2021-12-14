import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
//import { getMovies } from "../api/tmdb-api";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  //const favorites = movies.filter(m => m.favorite)
  //localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviePage;