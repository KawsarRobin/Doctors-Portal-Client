import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={7}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
