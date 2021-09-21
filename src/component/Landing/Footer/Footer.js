import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/footer.png';
import {Grid, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import GoogleMapsContainer from './Map';


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


}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container>
        <Grid item lg={3} md={3} align={'center'}>
          <div>
            <img className={classes.logo} src={require('../../../images/bbs3-logo.png').default} alt=""/>
          </div>
          <div>
            <Typography variant={'h6'} className={classes.head}> About us </Typography>
            <Typography className={classes.content} align={'left'}> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ad beatae delectus distinctio eum velquis quod suscipit vel veniam vero vitae voluptatem
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
              <LocationOnIcon/> <Typography style={{marginLeft: 20}}> Chubachu, Thimphu </Typography>
            </div>
            <div className={classes.icon}>
              <EmailIcon/> <Typography style={{marginLeft: 20}}> bbs3@gmail.com </Typography>
            </div>
            <div className={classes.icon}>
              <CallIcon/> <Typography style={{marginLeft: 20}}> 12456789 </Typography>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={3} align="center">
          <GoogleMapsContainer/>
        </Grid>
      </Grid>
    </div>
  );
};