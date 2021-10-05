import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../shared/PageBreak/PageBreak';
import Layout from '../component/Landing/Layout/Layout';

const useStyles = makeStyles(theme => ({
  contact: {
    padding: '0 0 100px 0',
    //backgroundColor: '#faf9f8',
  },
  contactUs: {
    padding: 40,
    backgroundColor: "#faf7f7",
    marginBottom: 100,
  },
  head: {
    fontWeight: 700,
    fontFamily: 'Raleway:wght@300',
    fontSize: 48,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  contactText: {
    fontSize: 48,
    fontWeight: 900,
    textAlign: 'center',
    fontFamily: 'Raleway:wght@300',

    [theme.breakpoints.down('sm')]: {
      fontSize: 25
    }
  },
  text: {
    marginTop: 50,
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: 1.5
  }
}));
const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <div id="contact" className={classes.contact}>
        <div className={classes.contactUs}>
          <Typography className={classes.head}>
            Contact Us
          </Typography>
        </div>
        <Container>
          <Typography className={classes.contactText}>Contact Us</Typography>
          <PageBreak/>
          <Typography className={classes.text}>
            +9752335264 <br/><br/>
            BBS Channel 3, Kuzu FM premises, Thimphu, Bhutan <br/><br/>
            info@bbs3.bt <br/>
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
