import React from 'react';
import {Banner} from '../Banner/Banner';
import {VideoSection} from '../VideoSection/VideoSection';
import {Schedule} from '../Schedule/Schedule';

export const LandingComponent = () => {
  return (
    <React.Fragment>
      <Banner/>
      <VideoSection/>
      <Schedule/>
    </React.Fragment>
  );
};