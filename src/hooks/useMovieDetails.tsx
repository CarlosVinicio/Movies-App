import React, { useEffect, useState } from 'react';
import {
  getMovieCredits,
  getMovieDetail,
} from '../api/resolvers/movieDB.resolver';
import { Cast } from '../interfaces/CreditsMovie';
import { MovieDetail } from '../interfaces/movieDBInterface';

interface MovieDetailState {
  isloading: boolean;
  movieDetail?: MovieDetail;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetailState>({
    cast: [],
    isloading: true,
    movieDetail: undefined,
  });

  const getMovieCompleteDetail = async () => {
    const movieDetail = getMovieDetail(movieId);
    const creditsMovie = getMovieCredits(movieId);
    const responses = await Promise.all([movieDetail, creditsMovie]);
    setState({
      movieDetail: responses[0].data,
      isloading: false,
      cast: responses[1].data.cast,
    });
  };

  useEffect(() => {
    getMovieCompleteDetail();
  }, []);

  return { ...state };
};
