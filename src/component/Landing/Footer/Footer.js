import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useStyles} from './styles';

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon className={classes.facebookIcon}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon className={classes.instagramIcon}/>
              </a>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Typography className={classes.copy}>&copy; {new Date().getFullYear()} BBS CHANNEL 3</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};