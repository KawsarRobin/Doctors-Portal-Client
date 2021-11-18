import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import AppointmentBanner from '../AppointmentBanner.js/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Feature></Feature>
      <AppointmentBanner></AppointmentBanner>
      <Doctors></Doctors>
      <Testimonial></Testimonial>
      <About></About>
    </div>
  );
};

export default Home;
