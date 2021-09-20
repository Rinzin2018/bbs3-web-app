import React from 'react';
import {Button, Container, Grid, Hidden, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mobileBanner: {
    height: '75vh',
    marginTop: '-57px',
    width: '100%',
    objectFit: 'cover'
  },
  bannerText: {
    marginTop: 250,
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      textAlign: 'center'
    }
  },
  head: {
    fontWeight: 900,
  },
  notes: {
    marginTop: 30,
  },
  button: {
    margin: '15px 0 5px 0',
    borderRadius: 25,
    width: 150,
    textTransform: 'capitalize',
    color: 'black',
  },
  div: {
    height: 500,
    width: '100%',
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,
    marginTop: 100,

    [theme.breakpoints.down('md')]: {
      height: 380,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
      marginTop: 130,
    },

    [theme.breakpoints.down('xs')]: {
      height: 300,
      borderTopLeftRadius: 150,
      borderBottomRightRadius: 150,
    }
  },
  div1: {
    height: 500,
    width: '97%',
    backgroundColor: theme.primary,
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,

    [theme.breakpoints.down('md')]: {
      height: 380,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
    },

    [theme.breakpoints.down('xs')]: {
      height: 300,
      borderTopLeftRadius: 150,
      borderBottomRightRadius: 150,
    }
  },
  image: {
    height: 523,
    width: '97%',
    marginTop: '-25px',
    objectFit: 'cover',
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,

    [theme.breakpoints.down('md')]: {
      height: 400,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '-10px',
      height: 320,
      width: '95%',
      borderTopLeftRadius: 150,
      borderBottomRightRadius: 150,
    }
  }
}));

export const Banner = () => {
  const classes = useStyles();

  return (
    <React.Fragment id="banner">
      <Hidden smUp={true}>
        <img src={require('../../../images/banner-child.jpg').default} className={classes.mobileBanner} alt=""/>
      </Hidden>
      <Container>
        <Grid container>
          <Grid item lg={5} md={5} xs={12}>
            <div className={classes.bannerText}>
              <Typography variant={'h5'} className={classes.head}>Study with us!</Typography>
              <Typography className={classes.notes}>Check scheduled classes for all subjects</Typography>
              <Button variant="outlined" color="secondary" className={classes.button}>About us</Button>
            </div>
          </Grid>
          <Hidden smDown={true}>
            <Grid item lg={7} md={7} xs={12}>
              <div className={classes.div}>
                <div className={classes.div1}>
                  <img src={require('../../../images/banner-child.jpg').default} className={classes.image} alt=""/>
                </div>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </React.Fragment>
  );
};