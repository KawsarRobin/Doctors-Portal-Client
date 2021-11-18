import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Card
      style={{ marginTop: '50px' }}
      sx={{ minWidth: 275, boxShadow: 0, border: 0 }}
    >
      <CardMedia
        component="img"
        style={{ width: 'auto', height: '80px', margin: '20px auto' }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
