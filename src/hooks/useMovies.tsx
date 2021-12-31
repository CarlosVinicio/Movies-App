import { useEffect, useState } from 'react';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../api/resolvers/movieDB.resolver';
import { Movie } from '../interfaces/movieDBInterface';

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
}

export const useMovies = () => {
  const [movies, setMovies] = useState<MoviesState>();
  const [isFetchingData, setisFetchingData] = useState(true);

  const getMovies = async () => {
    const nowPlayingResponse = getNowPlayingMovies();
    const popularMoviesResponse = getPopularMovies();
    const topRatedMoviesResponse = getTopRatedMovies();
    const upcomingMoviesResponse = getUpcomingMovies();

    const responses = await Promise.all([
      nowPlayingResponse,
      popularMoviesResponse,
      topRatedMoviesResponse,
      upcomingMoviesResponse,
    ]).finally(() => {
      setisFetchingData(false);
    });

    setMovies({
      nowPlayingMovies: responses[0].data.results,
      popularMovies: responses[1].data.results,
      topRatedMovies: responses[2].data.results,
      upcomingMovies: responses[3].data.results,
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    isFetchingData,
  };
};
