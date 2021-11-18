import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, image } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <img src={`data:image/jpeg;base64, ${image}`} width="300px" alt="" />
      <h3>{name}</h3>
    </Grid>
  );
};

export default Doctor;
