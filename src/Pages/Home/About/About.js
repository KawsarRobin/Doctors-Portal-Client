import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aboutBgImg from '../../../images/appointment-bg.png';

const About = () => {
  const AboutBg = {
    background: `url(${aboutBgImg})`,
    marginTop: 200,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(19, 44, 82, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
  };
  return (
    <Box style={AboutBg} sx={{ py: 5 }}>
      <Container>
        <Box sx={{ textAlign: 'center', my: 5 }}>
          <Typography
            style={{ color: '#28e0e0' }}
            sx={{ fontWeight: 600 }}
            variant="h6"
          >
            CONTACT US
          </Typography>
          <Typography sx={{ fontWeight: 500, color: 'white' }} variant="h4">
            Always Connected with us
          </Typography>
          <form>
            <TextField
              sx={{ width: '60%', mt: 5, backgroundColor: 'white' }}
              id="outlined-size-normal"
              placeholder="Email Address*"
            />
            <TextField
              sx={{ width: '60%', my: 3, backgroundColor: 'white' }}
              id="outlined-size-normal"
              placeholder="Subjects*"
            />{' '}
            <br />
            <textarea
              style={{ width: '60%' }}
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message*"
            ></textarea>{' '}
            <br />
            <Button
              type="submit"
              style={{ backgroundColor: '#28e0e0' }}
              variant="contained"
              sx={{ px: 5, mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
