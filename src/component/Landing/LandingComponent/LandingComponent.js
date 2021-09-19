import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Schedule} from '../Schedule/Schedule';
import {Feedback} from '../../Feedback/Feedback';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <VideoSection/>
      <Schedule/>
      <Feedback/>
    </React.Fragment>
  );
};