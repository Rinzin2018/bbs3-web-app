import React from 'react';
import {Button, Card, Container, Grid, Hidden, Paper, TextareaAutosize, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 200,
    [theme.breakpoints.down('xs')]:{
      marginTop: 100
    }
  },
  paper: {
    position: 'absolute',
    width: 350,
    borderRadius: 0,
    marginTop: '-365px',
    padding: 30,
    boxShadow: 'none',
    backgroundColor: theme.secondary
  },
  card: {
    width: '85%',
    padding: 50,
    borderRadius: 0,
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  feedbackText: {
    marginLeft: 200,
    [theme.breakpoints.down('xs')]:{
      marginLeft: 0
    }
  },
  text: {
    textAlign: 'left',
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: 0.5,
  },
  button: {
    textTransform: 'capitalize',
    width: 150,
    color: 'white',
    fontWeight: 900,
    borderRadius: 25,
    float: 'left',
    height: 45,
    fontSize: 18,
    [theme.breakpoints.down('xs')]:{
      width: '100%',
    }
  }
}));
export const Feedback = () => {
  const classes = useStyles();

  return (
    <div className={classes.section} id="feedback">
      <Container>
        <Grid container>
          <Grid item lg={12} xs={12} align="right">
            <Card className={classes.card}>
              <div className={classes.feedbackText}>
                <Typography className={classes.text}>
                  Send us your feedback!
                </Typography>
                <Typography style={{textAlign: 'left', marginTop: 10, marginBottom: 25, fontWeight: 200}}>
                  Do you have a suggestion or a feedback that <br/>
                  you think we should incorporate under BBS channel 3?
                </Typography>
                <Grid container spacing={1}>
                  <Grid item lg={6} xs={12}>
                    <TextField variant="outlined" margin="dense" label="Name" fullWidth/>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField variant="outlined" margin="dense" type="email" label="Email" fullWidth/>
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <TextareaAutosize aria-label="minimum height" minRows={5}
                                      placeholder="Describe your experience here..."
                                      style={{borderRadius: 5, width: '100%', padding: 20, backgroundColor: '#f4f4f4'}}
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <Button variant="contained" color="secondary" className={classes.button}>Send</Button>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Hidden smDown={true}>
          <Paper className={classes.paper}>
            <Typography style={{color: 'white', fontWeight: 700, marginBottom: 40}}>
              Contact us
            </Typography>
            <Grid container>
              <Grid item lg={2} xs={2}>
                <PinDropIcon style={{marginRight: 20, color: 'white'}}/>
              </Grid>
              <Grid item lg={10} xs={10}>
                <Typography style={{color: 'white', fontWeight: 400}}>
                  Chubachu, Thimphu
                </Typography>
              </Grid>
              <Grid item lg={2} xs={2}>
                <AlternateEmailIcon style={{marginRight: 20, marginTop: 30, color: 'white'}}/>
              </Grid>
              <Grid item lg={10} xs={10}>
                <Typography style={{color: 'white', fontWeight: 400, marginTop: 30,}}>
                  tsheringg@gmail.com
                </Typography>
              </Grid>
              <Grid item lg={2} xs={2}>
                <PhoneIcon style={{marginRight: 20, marginTop: 30, color: 'white'}}/>
              </Grid>
              <Grid item lg={10} xs={10}>
                <Typography style={{color: 'white', marginTop: 30, fontWeight: 400}}>
                  +975-17971633
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Hidden>
      </Container>
    </div>
  );
};