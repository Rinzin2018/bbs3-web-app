import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/footer.png';
import {Grid, Hidden, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';


const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100%',
    marginTop: 150,
    paddingTop: 200,
  },

  logo: {
    height: 80,
    marginLeft: 45,
  },

  head: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 50,
  },

  content: {
    color: '#fff',
    marginTop: 30,
    marginLeft: 150,
    marginBottom: 70
  },

  link: {
    marginLeft: 12,
    textDecoration: 'none',
  },

  follow: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 80,
    marginLeft: 150,
  },

  icon: {
    display: 'flex',
    marginTop: 30,
    marginLeft: 145
  },

  facebookIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: '#4267B2',
  },

  instagramIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: ' #cd486b',
  },

  linkedInIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: '#0077b5',
  },

  contact: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 80,
    marginLeft: 150,
  },

// Mobile View

  section1: {
    backgroundColor: '#FEA000',
    padding: '5px 5px',
    marginTop: 30,
    width: '100%',
  },

  logoMobile: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 6
  },

  headMobile: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 20,
    fontSize: 16
  },

  contentMobile: {
    color: '#fff',
    marginLeft: 20,
    fontSize:15
  },

  linkMobile: {
    textDecoration: 'none',
  },

  followMobile: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16
  },

  contactMobile: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 57,
    marginLeft: 6,
    marginBottom: 4,
    fontSize: 16
  },

  iconMobile: {
    display: 'flex',
    marginBottom: 6,
  },

  facebookIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    marginRight: 10,
    marginLeft: 20,
    color: '#4267B2',
  },

  instagramIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    color: '#4267B2',
  },

  linkedInIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    marginLeft: 10,
    color: '#4267B2',
  }

}));

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
                <Typography className={classes.content} align={'left'}> Lorem ipsum dolor sit amet, consectetur
                  eum velquis quod suscipit vel veniam vero vitae voluptatem
                  <a href="#" className={classes.link}> Read More.. </a> </Typography>
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
                  <LocationOnIcon/> <Typography style={{marginLeft: 20,}}> Chubachu, Thimphu </Typography>
                </div>
                <div className={classes.icon}>
                  <EmailIcon/> <Typography style={{marginLeft: 20}}> bbs3@gmail.com </Typography>
                </div>
                <div className={classes.icon}>
                  <CallIcon/> <Typography style={{marginLeft: 20}}> 12456789 </Typography>
                </div>
              </div>
            </Grid>

            <Grid item lg={3} md={3}>
              <div>
                Google Map
              </div>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden smUp={true}>
        <div className={classes.section1}>
          <Grid container>
            <Grid item sm={7} xs={7}>
              <div>
                <img className={classes.logoMobile} src={require('../../../images/bbs3-logo.png').default} alt=""/>
              </div>
              <div>
                <Typography variant={'h6'} className={classes.headMobile}> About us </Typography>
                <Typography className={classes.contentMobile} align={'left'}> Lorem ipsum dolor sit amet, consectetur
                  adipisquod suscipit vel veniam vero vitae
                  voluptatem
                  <a href="#" className={classes.linkMobile}> Read More.. </a> </Typography>
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
                  <LocationOnIcon/> <Typography style={{fontSize: 14}}> Chubachu, Thimphu </Typography>
                </div>
                <div className={classes.iconMobile}>
                  <EmailIcon/> <Typography style={{fontSize: 14}}> bbs3@gmail.com </Typography>
                </div>
                <div className={classes.iconMobile}>
                  <CallIcon/> <Typography style={{fontSize: 14}}> 12456789 </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </div>
  );
};