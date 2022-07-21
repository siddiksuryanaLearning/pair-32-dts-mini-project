import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tmdb from '../services/tmdb';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardMovies = ({ imgUrl, title, movieId }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          width: 140,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`../movie/${movieId}`, { replace: true });
          }}
        >
          <CardMedia sx={{ borderRadius: 2 }} component="img" image={imgUrl} alt={title} />
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
const ListMovies = ({ title, endpointUrl }) => {
  const baseUrlForMovie = 'https://image.tmdb.org/t/p/w200';
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const res = await tmdb.get(endpointUrl);
        setMovies(res.data.results);
        // console.log("movie list res", res.data.results);
      } catch (err) {
        console.log('err movie list', err);
      }
    };

    fetchDataMovies();
  }, [endpointUrl]);

  if (!movies) {
    return (
      <>
        <Container></Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Typography
          sx={{
            marginBottom: 2,
            marginTop: 4,
          }}
          variant="h4"
        >
          {title}
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          speed={200}
          slidesPerView={8}
          spaceBetween={10}
          className="swiper-container"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardMovies movieId={movie.id} imgUrl={`${baseUrlForMovie}${movie.poster_path}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default ListMovies;
