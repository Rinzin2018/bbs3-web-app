import React, {useEffect} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';
import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: 100,
    paddingBottom: 150,
    backgroundColor: '#faf9f8',
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: '#000000',
    fontFamily: 'Raleway',
    marginBottom: '.2em',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  aboutText: {
    color: '#414040',
    fontWeight: 300,
    fontSize: '1.15rem',
    letterSpacing: 0.5,
    lineHeight: 2,
    marginTop: 25,
    fontFamily: 'Raleway',

    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
      textAlign: 'justify'
    }
  },
}));

export const AboutUs = () => {

  useEffect(() => {
    Aos.init({
      offset: 2,
      easing: 'ease-in-quad',
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Container id="about">
        <Grid container>
          <Grid item lg={12} md={12} xs={12} align="center" data-aos="fade-right" data-aos-delay="50">
            <Typography className={classes.title} variant={'h5'}>
              About Us
            </Typography>
            <PageBreak/>
            <Typography className={classes.aboutText} data-aos="fade-right" data-aos-delay="150">
              BBS Channel 3, on air since 13th October 2021, is the third and newest national television
              station in Bhutan. <br/>
              BBS Channel 3 is technically affiliated to the Bhutan Broadcasting Service Corporation Ltd. <br/>
              (BBSCL) and operates as a Royal Project. We are a non-commercial and not-for-profit <br/>
              channel established to provide programs on educational themes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};