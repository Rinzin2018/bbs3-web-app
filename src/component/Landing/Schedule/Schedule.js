import React from 'react';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 150,
    padding: 100,
    backgroundColor: '#faf9f8',
    [theme.breakpoints.down('xs')]: {
      marginTop: 100,
      padding: 20
    }
  },
  scheduleImage: {
    width: '85%',
    height: 400,
    marginTop: 50,
    [theme.breakpoints.down('md')]: {
      height: 350,
      width: '90%',
    }
  },
  mobileImage: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginTop: 40,

    [theme.breakpoints.up('sm')]: {
      marginTop: 90,
      width: 200,
      height: 200,
    }
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
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  displayMobile: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
      width: 200
    },
    [theme.breakpoints.down('xs')]: {
      display: 'inline'
    },
  },
  scheduleText: {
    fontSize: 48,
    fontWeight: 900,
    textAlign: 'center',
    fontFamily: 'merri weather',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      marginTop: 20
    }
  }
}));
export const Schedule = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="schedule">
      <Typography className={classes.scheduleText} variant={'h5'}>
        Schedule
      </Typography>
      <PageBreak/>
      <Container>
        <Grid container>
          <Grid item lg={5} md={5} sm={7} xs={7}>
            <Typography className={classes.text}>Don't miss any of our programs. Check our</Typography>
            <Typography className={classes.text2}>schedule updates here</Typography>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
              <Button color="secondary" variant="contained" className={classes.button}>Check Schedule</Button>
            </a>
          </Grid>

          <Grid item lg={7} md={7} align="center">
            <div className={classes.smDown}>
              <img src={require('../../../images/schedule.png').default} className={classes.scheduleImage} alt=""/>
            </div>
          </Grid>
          <Grid item sm={5} xs={5} align="center">
            <div className={classes.displayMobile}>
              <img src={require('../../../images/schedule-mobile.png').default} className={classes.mobileImage} alt=""/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};