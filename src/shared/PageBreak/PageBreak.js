import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageBreak:{
    width: 300,
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      width: 150
    }
  }
}))

export const PageBreak = () => {
  const classes = useStyles();

  return (
    <div align="center">
      <img src={require('../../images/pageBreak.png').default} alt="" className={classes.pageBreak}/>
    </div>
  )
}