import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 150,
    [theme.breakpoints.down('xs')]: {
      marginTop: 100
    }
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: '#000000',
    fontFamily: 'merri weather',
    marginBottom: '.2em',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  aboutText: {
    color: '#414040',
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: 1,
    lineHeight: 2,
    marginTop: 25,

    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
      textAlign: 'justify'
    }
  },
}));

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.section} id="about">
        <Grid container>
          <Grid item lg={12} md={12} xs={12} align="center">
            <Typography className={classes.title} variant={'h5'}>
              About Us
            </Typography>
            <PageBreak/>
            <Typography className={classes.aboutText}>
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