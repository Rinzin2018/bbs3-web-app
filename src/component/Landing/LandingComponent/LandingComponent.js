import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Schedule} from '../Schedule/Schedule';
import {Feedback} from '../../Feedback/Feedback';
import {AboutUs} from '../AboutUs/AboutUs';
import {Footer} from '../Footer/Footer';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <VideoSection/>
      <Schedule/>
      <AboutUs/>
      <Feedback/>
      <Footer/>
    </React.Fragment>
  );
};