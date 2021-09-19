import React from 'react';
import {Button, Container, Grid, Hidden, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 200,
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
    }
  },
  scheduleImage: {
    width: '100%',
    height: 500,
    [theme.breakpoints.down('md')]: {
      height: 350,
      width: '90%',
    }
  },
  mobileImage: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginTop: 40
  },
  text: {
    fontSize: 20,
    marginTop: 180,

    [theme.breakpoints.down('md')]: {
      marginTop: 130,
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      fontSize: 15,
      fontWeight: 200
    }
  },
  text2: {
    fontSize: 20,

    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      fontWeight: 200
    }
  },
  button: {
    width: 200,
    height: 45,
    fontSize: 16,
    color: 'white',
    borderRadius: 25,
    marginTop: 20,
    fontWeight: 900,
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      width: 150,
      height: 30,
      fontSize: 12,
      marginTop: 30
    }
  }
}));
export const Schedule = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container>
        <Grid container>
          <Grid item lg={5} md={5} xs={7}>
            <Typography className={classes.text}>Don't miss any of our programs. Check our</Typography>
            <Typography className={classes.text2}>schedule updates here</Typography>
            <Button color="secondary" variant="contained" className={classes.button}>Check Schedule</Button>
          </Grid>
          <Hidden smDown={true}>
            <Grid item lg={7} md={7}>
              <img src={require('../../../images/schedule.png').default} className={classes.scheduleImage} alt=""/>
            </Grid>
          </Hidden>
          <Hidden smUp={true}>
            <Grid item xs={5} align="center">
              <img src={require('../../../images/schedule-mobile.png').default} className={classes.mobileImage} alt=""/>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};