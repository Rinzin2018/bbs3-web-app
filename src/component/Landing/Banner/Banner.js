import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {useStyles} from './BannerStyles';

export const Banner = () => {
  const classes = useStyles();

  return (
    <div id="banner" className={classes.bannerBackground}>
      <Container>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className={classes.bannerText}>
              <Typography variant={'h5'} className={classes.head}>Learn something</Typography>
              <Typography className={classes.notes}>
                Learning has no time or age restriction, all that we need is a passion for lifelong learning
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};