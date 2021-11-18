import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const Banner = () => {
  return (
    <Container style={{ backgroundImage: `url(${bg})` }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <Box sx={{ px: 5 }}>
            <Typography style={{ fontWeight: 500 }} variant="h3" sx={{ my: 3 }}>
              Your new smile star here
            </Typography>
            <Typography
              sx={{ my: 3 }}
              variant="h6"
              style={{ fontWeight: 300, fontSize: 14, color: 'gray' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus optio eum atque, accusamus dignissimos vero laborum
              dolores! Vel, obcaecati assumenda!
            </Typography>
            <Button
              sx={{ mb: 3 }}
              style={{ backgroundColor: '#28e0e0' }}
              variant="contained"
            >
              Get appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={{ display: 'flex', alignItems: 'center' }}>
          <img src={chair} alt="" sx={{ ps: 5 }} style={{ width: 350 }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
