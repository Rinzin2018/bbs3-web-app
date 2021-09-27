import * as React from 'react';
import {Appbar} from '../component/Appbar/Appbar';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../Theme';
import {LandingComponent} from '../component/Landing/LandingComponent/LandingComponent';

// styles
const pageStyles = {
  color: '#232129',
  backgroundColor: '#FFFFFF',
  fontFamily: 'Nunita',
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <ThemeProvider theme={theme}>
        <Appbar/>
        <LandingComponent/>
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;
