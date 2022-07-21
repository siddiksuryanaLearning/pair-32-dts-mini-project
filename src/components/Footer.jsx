import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ color: '#808080', marginTop: 5 }}>
      <Container sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body">Audio and Subtitles</Typography>
                  <Typography variant="body">Media Center</Typography>
                  <Typography variant="body">Security</Typography>
                  <Typography variant="body">Contact us</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body">Audio Description</Typography>
                  <Typography variant="body">Investor Relations</Typography>
                  <Typography variant="body">Legal Provisions</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body">Help center</Typography>
                  <Typography variant="body">Jobs</Typography>
                  <Typography variant="body">Cookie Preferences</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body">Gift Cards</Typography>
                  <Typography variant="body">Terms of Use</Typography>
                  <Typography variant="body">Corporate Information</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button size="large" color="secondary" variant="outlined">
              Service Code
            </Button>
          </Box>
          <Typography variant="body">© 2022 Movies, All Right Reserved</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
