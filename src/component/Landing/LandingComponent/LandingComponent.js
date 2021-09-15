import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Schedule} from '../Schedule/Schedule';
import {AboutUs} from '../AboutUs/AboutUs';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <VideoSection/>
      <Schedule/>
      <AboutUs/>
    </React.Fragment>
  );
};