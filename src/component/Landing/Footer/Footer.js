import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/footer.png';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100%',
    height: 500,
    marginTop: 150,
    paddingTop: 200
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography>
        Helkasdfg
      </Typography>
    </div>
  );
};