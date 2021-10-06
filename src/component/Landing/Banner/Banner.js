import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {useStyles} from './BannerStyles';

export const Banner = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.largeDevice}>
        <div id="banner" className={classes.bannerBackground}>
          <Container>
            <Grid container>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <img src={require('../../../images/bbs3-logo.png').default} alt="" style={{marginTop: '50%', width: 250, height: 200,}}/>
                <div className={classes.bannerText}>
                  <Typography variant={'h5'} className={classes.head}>Learn Something</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <div className={classes.smallDevice}>
        <div id="banner" align="center" className={classes.bannerMobileBackground}>
          <Container align="center">
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
      </div>
    </div>
  );
};