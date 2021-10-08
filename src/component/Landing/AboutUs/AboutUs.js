import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: 100,
    paddingBottom: 50,
    // backgroundColor: '#faf9f8',
  },
  title: {
    fontSize: 48,
    fontWeight: 900,
    color: theme.secondary,
    fontFamily: 'Raleway:wght@300',
    marginBottom: '.2em',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  aboutText: {
    color: '#414040',
    fontWeight: 300,
    fontSize: 18,
    letterSpacing: 0.5,
    lineHeight: 2,
    marginTop: 25,
    fontFamily: 'Raleway:wght@300',

    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    }
  },
}));

export const AboutUs = () => {
  const classes = useStyles();

  return (
    <div id="about" className={classes.section}>
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} align="center">
            <Typography className={classes.title} variant={'h5'}>
              About Us
            </Typography>
            <PageBreak/>
            <Typography className={classes.aboutText}>
              BBS Channel 3 is the third national television channel in Bhutan and is technically
              affiliated to the <br/>
              Bhutan Broadcasting Service Corporation. We are a non-commercial and not-for-profit Royal <br/>
              Project established to provide programs on educational themes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};