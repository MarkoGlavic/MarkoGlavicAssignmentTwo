import { useEffect, useState } from "react";
import {getMovie} from '../api/tmdb-api'
import {getUpcomingMovie} from '../api/tmdb-api'

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

const useUpcomingMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getUpcomingMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie