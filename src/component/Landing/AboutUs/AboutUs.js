import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 200,
    [theme.breakpoints.down('xs')]: {
      marginTop: 100
    }
  },
  title: {
    fontSize: 22,
    fontWeight: 520,
    color: '#000000',
    marginTop: '2em',
    marginBottom: '.3em'
  },
  aboutText: {
    color: '#414040',
    fontWeight: 300,
    fontSize: '1rem'
  },
  aboutImage: {
    width: 500,
    height: '100%',

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  mobile: {
    padding: '3em 5em 3em 5em',
    borderTopRightRadius: 130,
    borderBottomLeftRadius: 130,
    backgroundColor: theme.primary,
    boxShadow: '10px 16px 5px #FFB900',

    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      borderTopRightRadius: 150,
      borderBottomLeftRadius: 150,
      padding: '5em 5em 5em 5em',
    }
  },
  mobileText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 300,
    marginTop: 20
  }
}));

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.section} id="about">
        <Hidden smDown={true}>
          <Grid container>
            <Grid item lg={7} md={7} xs={12} align="center">
              <img src={require('../../../images/AboutUs.png').default} className={classes.aboutImage} alt=""/>
            </Grid>
            <Grid item lg={5} md={5} xs={12}>
              <Typography className={classes.title} variant={'h5'}>
                About BBS channel 3:
              </Typography>
              <Typography className={classes.aboutText}>
                BBS Channel 3, on air since 13th October 2021, <br/> is the third and newest national television
                station in Bhutan. <br/>
                BBS Channel 3 is technically affiliated to the Bhutan Broadcasting Service
                Corporation Ltd. (BBSCL) and operates as a Royal Project. <br/> We are a non-commercial and
                not-for-profit channel established
                to provide programs on educational themes.
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <div className={classes.mobile}>
          <Typography variant={'h5'} align={'center'}>
            About BBS channel 3:
          </Typography>
          <Typography className={classes.mobileText}>
            BBS Channel 3, on air since 13th October 2021, is the third and newest national television station in
            Bhutan. BBS Channel 3 is technically affiliated to the Bhutan Broadcasting Service
            Corporation Ltd. (BBSCL) and operates as a Royal Project. We are a non-commercial and not-for-profit channel
            established to provide programs on educational themes.
          </Typography>
        </div>
      </Container>

    </div>

  );
};