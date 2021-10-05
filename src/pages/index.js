import * as React from 'react';
import {LandingComponent} from '../component/Landing/LandingComponent/LandingComponent';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from '../Theme';
import {Appbar} from '../component/Appbar/Appbar';
import {Footer} from '../component/Landing/Footer/Footer';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  main: {
    color: '#232129',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Raleway:wght@300',
  },
  root: {
    height: '100%',
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    /*<Layout>
      <LandingComponent/>
    </Layout>*/
    <ThemeProvider theme={theme}>
      <div className={clsx({[classes.root]: true})}>
        <Appbar/>
        <main className={classes.root}>
          <LandingComponent/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
