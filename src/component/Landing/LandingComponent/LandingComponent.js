import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Feedback} from '../Feedback/Feedback';
import {AboutUs} from '../AboutUs/AboutUs';
import {ContactUs} from '../ContactUs/ContactUs';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <AboutUs/>
      <VideoSection/>
      <ContactUs/>
      <Feedback/>
    </React.Fragment>
  );
};