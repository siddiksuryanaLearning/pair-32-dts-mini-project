import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { Box, Button, Card, CardMedia, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tmdb from '../services/tmdb';
import ListMovies from '../components/ListMovies';

const MovieDetailPage = () => {
  const navigate = useNavigate();

  const baseUrlForMovie = 'https://image.tmdb.org/t/p';
  const [movie, setMovie] = useState();
  let { movieId } = useParams();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const res = await tmdb.get(`/movie/${movieId}`);
        setMovie(res.data);
      } catch (err) {
        console.log('err', err);
        navigate('*');
      }
    };

    fetchDataMovies();
  }, [movieId, navigate]);

  if (!movie) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${baseUrlForMovie}/original${movie.backdrop_path})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingY: 5,
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                zIndex: '1000',
              }}
            >
              <Card
                sx={{
                  maxWidth: '300px',
                }}
              >
                <CardMedia component="img" image={`${baseUrlForMovie}/w300${movie.poster_path}`} alt={movie.title} />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              sx={{
                zIndex: '1000',
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  height: '100%',
                }}
              >
                <Stack>
                  <Typography fontWeight="700" variant="h4">
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    <Typography>{movie.release_date}</Typography>
                    <Typography>&#x2022;</Typography>
                    {movie.genres.map((genre) => (
                      <Typography key={genre.id}>{genre.name}, </Typography>
                    ))}
                  </Box>
                </Stack>

                <Box>
                  <Typography fontStyle="verdana" variant="body">
                    "{movie.tagline}"
                  </Typography>
                  <Typography variant="h5">Description</Typography>
                  <Typography variant="body">{movie.overview}</Typography>
                </Box>

                <Stack spacing={2} direction="row">
                  <Button variant="contained" startIcon={<PlayArrow />} size="large" color="secondary">
                    Play
                  </Button>
                  <Button variant="contained" color="tertiary" startIcon={<InfoOutlined />} size="large">
                    More Information
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ListMovies endpointUrl={`/movie/${movieId}/similar?language=en-US&page=1`} title="Similar" />

      <ListMovies endpointUrl={`/movie/${movieId}/recommendations?language=en-US&page=1`} title="Recommendations" />

      <ListMovies endpointUrl="/movie/popular?language=en-US&page=1" title="Popular" />
    </>
  );
};

export default MovieDetailPage;
