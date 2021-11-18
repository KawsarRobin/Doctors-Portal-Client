import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppointmentBg from '../../../images/appointment-bg.png';
import Doctor from '../../../images/doctor.png';

const AppointmentBanner = () => {
  const appointmentBgStyle = {
    background: `url(${AppointmentBg})`,
    marginTop: 200,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(19, 44, 82, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
  };
  return (
    <Box style={appointmentBgStyle} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={Doctor} style={{ width: 400, marginTop: -110 }} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Box style={{ textAlign: 'start' }}>
            <Typography
              variant="h6"
              sx={{ my: 3 }}
              style={{ color: '#28e0e0' }}
            >
              APPOINTMENT
            </Typography>
            <Typography sx={{ my: 3 }} style={{ color: 'white' }} variant="h4">
              Make an appointment
            </Typography>
            <Typography
              sx={{ my: 3 }}
              variant="h6"
              style={{ fontSize: 14, fontWeight: 300, color: 'white' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus hic doloremque illum quis corrupti deserunt
              consequuntur in aspernatur, beatae fugiat.
            </Typography>
            <Button style={{ backgroundColor: '#28e0e0' }} variant="contained">
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
