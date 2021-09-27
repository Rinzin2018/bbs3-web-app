import React from 'react';
import {Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mobileSection: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  }
}));

export const GoogleMapsContainer = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown={true}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.73803147685!2d89.6314899150294!3d27.477413942166038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e194181428ad2d%3A0xcf8d7c3f7d5e245c!2sKuzoo%20FM!5e0!3m2!1sen!2sbt!4v1632300797743!5m2!1sen!2sbt"
          width="250" height="250" style={{border: 0, marginTop: 80}} allowFullScreen="" loading="lazy"/>
      </Hidden>
      <div className={classes.mobileSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.73803147685!2d89.6314899150294!3d27.477413942166038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e194181428ad2d%3A0xcf8d7c3f7d5e245c!2sKuzoo%20FM!5e0!3m2!1sen!2sbt!4v1632300797743!5m2!1sen!2sbt"
          width="125" height="150" style={{border: 0, marginTop: 10}} allowFullScreen="" loading="lazy"/>
      </div>
    </div>
  );
};