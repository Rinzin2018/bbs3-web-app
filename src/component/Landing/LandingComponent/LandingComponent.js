import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Schedule} from '../Schedule/Schedule';
import {Feedback} from '../Feedback/Feedback';
import {AboutUs} from '../AboutUs/AboutUs';
import {ContactUs} from '../ContactUs/ContactUs';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <AboutUs/>
      <VideoSection/>
      <Schedule/>
      <ContactUs/>
      <Feedback/>
    </React.Fragment>
  );
};