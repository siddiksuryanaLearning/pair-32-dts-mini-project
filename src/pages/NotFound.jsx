import { Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function NotFound() {
  return (
    <Container sx={{}}>
      <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
            spelling.
          </Typography>

          <Button color="secondary" to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </Stack>
      </ContentStyle>
    </Container>
  );
}
