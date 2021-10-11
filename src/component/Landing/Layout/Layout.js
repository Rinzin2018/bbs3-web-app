import * as React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../../../Theme';
import {Footer} from '../Footer/Footer';
import {Appbar} from '../../Appbar/Appbar';
import { Helmet } from "react-helmet"

// styles
const pageStyles = {
  color: '#232129',
  backgroundColor: '#FFFFFF',
  fontFamily: 'Raleway:wght@300',
};

const Layout = ({children}) => {

  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BBS3</title>
        <link rel="canonical" href="https://bbs3.bt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <div>
          <Appbar/>
          {children}
          <Footer/>
        </div>
      </ThemeProvider>
    </main>
  );
};

export default Layout;
