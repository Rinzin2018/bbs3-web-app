import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {PageBreak} from '../../../shared/PageBreak/PageBreak';

const useStyles = makeStyles(theme => ({
  contact: {
    padding: '100px 0 100px 0',
  },
  contactText: {
    fontSize: 48,
    fontWeight: 900,
    textAlign: 'center',
    fontFamily: 'merri weather',

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
export const ContactUs = () => {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.contact}>
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
  );
};