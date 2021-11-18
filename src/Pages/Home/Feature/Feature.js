import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Feature = () => {
  return (
    <Container sx={{ my: 5, py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: 300 }} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography sx={{ my: 5, fontWeight: 500 }} variant="h4">
              {' '}
              Exceptional Dental care on your terms
            </Typography>
            <Typography
              style={{ fontSize: 14, color: 'gray' }}
              sx={{ my: 5 }}
              variant="h6"
            >
              {' '}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique provident quas optio! Eum rerum cum distinctio id vitae
              perspiciatis cupiditate adipisci ex tempore voluptatum aspernatur
              animi sit, harum, commodi ipsa numquam. Repellendus voluptatem
              odit veniam ab perspiciatis animi provident cum velit sed non
              assumenda ipsam sit
            </Typography>
            <Button style={{ backgroundColor: '#28e0e0' }} variant="contained">
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feature;
