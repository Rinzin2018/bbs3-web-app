import React from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import {GoogleMapsContainer} from './Map';
import {useStyles} from './styles';
import {Link} from 'react-scroll';

export const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown={true}>
        <div className={classes.section}>
          <Grid container>
            <Grid item lg={3} md={3} align={'center'}>
              <div>
                <img className={classes.logo} src={require('../../../images/bbs3-logo.png').default} alt=""/>
              </div>
              <div>
                <Typography variant={'h6'} className={classes.head}> About us </Typography>
                <Typography className={classes.content} align={'left'}> LBBS Channel 3, on air since 13th October
                  2021, <br/> is the third and newest national television station in Bhutan.
                  <Link to="about" spy={true} smooth={true} className={classes.link}> Read More.. </Link> </Typography>
              </div>
            </Grid>
            <Grid item lg={3} md={3}>
              <div>
                <Typography variant={'h6'} className={classes.follow}> Follow us </Typography>
              </div>
              <div className={classes.icon}>
                <FacebookIcon className={classes.facebookIcon}/>
                <InstagramIcon className={classes.instagramIcon}/>
                <LinkedInIcon className={classes.linkedInIcon}/>
              </div>
            </Grid>
            <Grid item lg={3} md={3}>
              <div>
                <Typography variant={'h6'} className={classes.contact}> Contact us </Typography>
              </div>
              <div style={{color: '#fff'}}>
                <div className={classes.icon}>
                  <LocationOnIcon/> <Typography style={{marginLeft: 20,}}> BBS Channel 3, Doeboom Lam, Thimphu,
                  Bhutan. </Typography>
                </div>
                <div className={classes.icon}>
                  <EmailIcon/> <Typography style={{marginLeft: 20}}> info@bbs3.bt </Typography>
                </div>
                <div className={classes.icon}>
                  <CallIcon/> <Typography style={{marginLeft: 20}}> +9752335264 </Typography>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3}>
              <GoogleMapsContainer/>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <div className={classes.section1}>
        <Grid container>
          <Grid item sm={7} xs={7}>
            <div>
              <img className={classes.logoMobile} src={require('../../../images/bbs3-logo.png').default} alt=""/>
            </div>
            <div>
              <Typography variant={'h6'} className={classes.headMobile}> About us </Typography>
              <Typography className={classes.contentMobile} align={'left'}> BBS Channel 3, on air since 13th October
                2021, <br/> is the third and newest national television station in Bhutan.
                <Link to="about" spy={true} smooth={true} className={classes.linkMobile}> Read More.. </Link> </Typography>
            </div>
            <div>
              <Typography variant={'h6'} className={classes.followMobile}> Follow us </Typography>
            </div>
            <div className={classes.iconMobile}>
              <FacebookIcon className={classes.facebookIconMobile}/>
              <InstagramIcon className={classes.instagramIconMobile}/>
              <LinkedInIcon className={classes.linkedInIconMobile}/>
            </div>
          </Grid>
          <Grid item sm={5} xs={5}>
            <div>
              <Typography variant={'h6'} className={classes.contactMobile}> Contact us </Typography>
            </div>
            <div style={{color: '#fff'}}>
              <div className={classes.iconMobile}>
                <LocationOnIcon/> <Typography style={{fontSize: 14}}> BBS Channel 3, Doeboom Lam, Thimphu,
                Bhutan. </Typography>
              </div>
              <div className={classes.iconMobile}>
                <EmailIcon/> <Typography style={{fontSize: 14}}> info@bbs3.bt </Typography>
              </div>
              <div className={classes.iconMobile}>
                <CallIcon/> <Typography style={{fontSize: 14}}> +9752335264 </Typography>
              </div>
            </div>
            <div>
              <GoogleMapsContainer/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};