import * as React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../../../Theme';
import {Footer} from '../Footer/Footer';
import {Appbar} from '../../Appbar/Appbar';

// styles
const pageStyles = {
  color: '#232129',
  backgroundColor: '#FFFFFF',
  fontFamily: 'Raleway:wght@300',
};

const Layout = ({children}) => {

  return (
    <main style={pageStyles}>
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
