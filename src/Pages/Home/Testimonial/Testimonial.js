import { Container, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ textAlign: 'left', my: 5 }}>
        <Typography
          style={{ color: '#28e0e0' }}
          sx={{ fontWeight: 600, fontSize: 14 }}
          variant="h6"
        >
          TESTIMONIAL
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="h4">
          What's Our Patients Says
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolore id ad veniam cumque maxime, ab itaque dolor esse illo,
                atque eligendi suscipit, doloribus odit. Deleniti dignissimos
                porro tenetur error! Aliquid labore reiciendis voluptates neque
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}
              >
                <img src={people1} alt="" sx={{ width: 'auto' }} />
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    style={{ color: '#28e0e0' }}
                    sx={{ fontSize: 14 }}
                  >
                    Winson Herry
                  </Typography>{' '}
                  <Typography variant="h6" sx={{ fontSize: 14 }}>
                    California
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolore id ad veniam cumque maxime, ab itaque dolor esse illo,
                atque eligendi suscipit, doloribus odit. Deleniti dignissimos
                porro tenetur error! Aliquid labore reiciendis voluptates neque
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}
              >
                <img src={people2} alt="" sx={{ width: 'auto' }} />
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    style={{ color: '#28e0e0' }}
                    sx={{ fontSize: 14 }}
                  >
                    Winson Herry
                  </Typography>{' '}
                  <Typography variant="h6" sx={{ fontSize: 14 }}>
                    California
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolore id ad veniam cumque maxime, ab itaque dolor esse illo,
                atque eligendi suscipit, doloribus odit. Deleniti dignissimos
                porro tenetur error! Aliquid labore reiciendis voluptates neque
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}
              >
                <img src={people3} alt="" sx={{ width: 'auto' }} />
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    style={{ color: '#28e0e0' }}
                    sx={{ fontSize: 14 }}
                  >
                    Winson Herry
                  </Typography>{' '}
                  <Typography variant="h6" sx={{ fontSize: 14 }}>
                    California
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
