import React from 'react';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 150,
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
    }
  },
  scheduleImage: {
    width: '100%',
    height: 500
  },
  text: {
    fontSize: 20,
     marginTop: 180,
    [theme.breakpoints.down('xs')]:{
      marginTop: 30,
      fontSize: 18
    }
  },
  text2: {
    fontSize: 20,

    [theme.breakpoints.down('xs')]:{
      fontSize: 18
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
    textTransform: 'capitalize'
  }
}));
export const Schedule = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container>
        <Grid container>
          <Grid item lg={5} xs={12}>
            <Typography className={classes.text}>Don't miss any of our programs. Check our</Typography>
            <Typography className={classes.text2}>schedule updates here</Typography>
            <Button color="secondary" variant="contained" className={classes.button}>Check Schedule</Button>
          </Grid>
          <Grid item lg={7} xs={12}>
            <img src={require('../../../images/schedule.png').default} className={classes.scheduleImage} alt=""/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};