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
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className={classes.copy}>&copy; {new Date().getFullYear()} bbs3</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6} align="right">
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon className={classes.facebookIcon}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon className={classes.instagramIcon}/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.linkedInIcon}/>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};