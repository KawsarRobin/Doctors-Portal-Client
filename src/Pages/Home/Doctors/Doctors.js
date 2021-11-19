import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('https://intense-cove-70929.herokuapp.com/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <Container>
      <div>
        <Box sx={{ textAlign: 'left', my: 5 }}>
          <Typography
            style={{ color: '#28e0e0' }}
            sx={{ fontWeight: 600, fontSize: 14 }}
            variant="h6"
          >
            Doctors
          </Typography>
          <Typography sx={{ fontWeight: 600 }} variant="h4">
            Meet Our Doctors
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Doctors;
