import React from 'react';
// import { Box, Grid } from '@mui/material';
// import { Container } from '@mui/system';
import { useEffect, useState } from 'react';

import tmdb from '../services/tmdb';
import Banner from '../components/Banner';
// import CardMovies from '../components/CardMovies';
import ListMovies from '../components/ListMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [moviesReady, setMoviesReady] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get('trending/movie/day');
        setMovies(fetchedMovies.data.results);
        setMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [movies, moviesReady]);

  return (
    <>
      <Banner />
      <ListMovies endpointUrl="/movie/popular?language=en-US&page=1" title="Popular" height="160px" />

      <ListMovies endpointUrl="movie/top_rated?language=en-US&page=1" title="Top Rated" />

      <ListMovies endpointUrl="movie/upcoming?language=en-US&page=1" title="Upcoming" />

      <ListMovies endpointUrl="movie/now_playing?language=en-US&page=1" title="Now Playing" />
      <ListMovies endpointUrl="movie/upcoming?language=en-US&page=1" title="Watch Again" />
      <ListMovies endpointUrl="movie/now_playing?language=en-US&page=1" title="My List" />
    </>
  );
};

export default HomePage;
