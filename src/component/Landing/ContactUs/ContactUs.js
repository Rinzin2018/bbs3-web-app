import React, {useEffect} from 'react';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';
import Aos from 'aos';
import 'aos/dist/aos.css';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  contact: {
    // padding: '100px 0 100px 0',
    // backgroundColor: '#faf9f8',

    [theme.breakpoints.down('sm')]: {
      marginTop: 300,
    }
  },
  contactText: {
    fontSize: 48,
    fontWeight: 900,
    textAlign: 'center',
    color: theme.secondary,
    fontFamily: 'Raleway:wght@300',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  text: {
    marginTop: 50,
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 18,
    fontFamily: 'Raleway:wght@300'
  }
}));

export const ContactUs = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({
      offset: 2,
      easing: 'ease-in-quad',
    });
  }, []);

  return (
    <div id="contact" className={classes.contact}>
      <Container>
        <Typography className={classes.contactText} data-aos="fade-right" data-aos-delay="50">Contact Us</Typography>
        <PageBreak data-aos="fade-right" data-aos-delay="50"/>
        <Typography className={classes.text} data-aos="flip-up" data-aos-delay="50">
          <PhoneIcon style={{fontSize: 30, color: '#55ac05'}}/>
          <p>+9752335264 <br/><br/></p>
          <LocationOnIcon style={{fontSize: 30, color: '#06bfd4'}}/>
          <p>BBS Channel 3, Chubachu, Thimphu, Bhutan <br/><br/></p>
          <div>
            <EmailIcon style={{fontSize: 30, color: '#e6523c'}}/> <p>info@bbs3.bt</p>
          </div>
        </Typography>
      </Container>
    </div>
  );
};