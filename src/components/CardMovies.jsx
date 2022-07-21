import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const CardMovies = ({ movie }) => {
  return (
    <Card
      id={movie.id}
      sx={{
        display: 'flex',
        width: '285px',
        height: '160px',
        m: 0.3,
      }}
    >
      <CardMedia component="img" image={`${BASE_IMAGE_URL}${movie.poster_path}`} alt="Movie poster" />
    </Card>
  );
};

export default CardMovies;
