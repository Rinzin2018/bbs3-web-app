import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {useStyles} from './BannerStyles';

export const Banner = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown={true}>
        <div id="banner" className={classes.bannerBackground}>
          <Container>
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <img src={require('../../../images/bbs3-logo.png').default} alt="" className={classes.logo}/>
                <div className={classes.bannerText}>
                  <Typography variant={'h5'} className={classes.head}>Learn Something</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
      <Hidden smUp={true}>
        <div id="banner" align="center" className={classes.bannerMobileBackground}>
          <Container>
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <img src={require('../../../images/bbs3-logo.png').default} alt="" className={classes.logo}/>
                <div className={classes.bannerText}>
                  <Typography variant={'h5'} className={classes.head}>Learn Something</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
    </div>
  );
};