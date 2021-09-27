import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {useStyles} from './BannerStyles';

export const Banner = () => {
  const classes = useStyles();

  return (
    <React.Fragment id="banner">
      <Hidden smUp={true}>
        <img src={require('../../../images/banner-child.jpg').default} className={classes.mobileBanner} alt=""/>
      </Hidden>
      <Container>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className={classes.bannerText}>
              <Typography variant={'h5'} className={classes.head}>Learn something!</Typography>
              <Typography className={classes.notes}>
                Learning has no time or age restriction, all that we need is a passion for lifelong learning
              </Typography>
            </div>
          </Grid>
          <Hidden xsDown={true}>
            <Grid item lg={7} md={7} sm={7} xs={12}>
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