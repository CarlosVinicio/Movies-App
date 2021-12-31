import { CreditsMovie } from '../../interfaces/CreditsMovie';
import {
  MovieDBIMoviesResponse,
  MovieDetail,
} from '../../interfaces/movieDBInterface';
import movieDB from '../movieDB';

export const getNowPlayingMovies = async () => {
  return await movieDB.get<MovieDBIMoviesResponse>('/movie/now_playing');
};
export const getPopularMovies = async () => {
  return await movieDB.get<MovieDBIMoviesResponse>('/movie/popular');
};
export const getTopRatedMovies = async () => {
  return await movieDB.get<MovieDBIMoviesResponse>('/movie/top_rated');
};
export const getUpcomingMovies = async () => {
  return await movieDB.get<MovieDBIMoviesResponse>('/movie/upcoming');
};
//movie details
export const getMovieDetail = async (id: number) => {
  return await movieDB.get<MovieDetail>(`/movie/${id}`);
};
export const getMovieCredits = async (id: number) => {
  return await movieDB.get<CreditsMovie>(`/movie/${id}/credits`);
};
