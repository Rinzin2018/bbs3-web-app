import React from 'react';
import {Card, Container, Grid, Hidden, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 200,
    [theme.breakpoints.down('xs')]:{
      marginTop: 100
    }
  },
  title: {
    fontSize: 22,
    fontWeight: 520,
    color: '#000000',
    marginTop: '2em',
    marginBottom:'.3em'
  },
  aboutText: {
    color: '#414040',
    fontWeight: 300,
    fontSize:'1rem'
  },
  aboutImage: {
    width: 500,
    height: '100%',

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  mobile: {
    padding: '3em 5em 3em 5em',
    borderTopRightRadius: 130,
    borderBottomLeftRadius: 130,
    backgroundColor: theme.primary,
    boxShadow: '10px 16px 5px #FFB900'
  },
  mobileText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 300
  }
}));

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.section} id="about">
        <Hidden smDown={true}>
          <Grid container>
            <Grid item lg={7} md={7} xs={12} align="center">
              <img src={require('../../../images/AboutUs.png').default} className={classes.aboutImage} alt=""/>
            </Grid>
            <Grid item lg={5} md={5} xs={12}>
              <Typography className={classes.title} variant={'h5'}>
                About Us
              </Typography>
              <Typography className={classes.aboutText}>
                BBS is the first television station in Bhutan. <br/> News, documentaries, and entertainment <br/>
                programs were originally broadcast for one <br/> hour in the evening (7 p.m. to 8 p.m.),
                seven <br/> days a
                week, but expanded to four
                hours (6 <br/> p.m. to 10 p.m.) in December 2004. Once <br/> limited to the capital city.
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
      </Container>
      <Hidden smUp={true}>
        <div className={classes.mobile}>
          <Typography variant={'h5'} align={'center'}>
            About Us
          </Typography>
          <Typography className={classes.mobileText}>
            BBS is the first television station in Bhutan.News,documentaries,and entertainment
            programs were originally broadcast for one hour in the evening (7 p.m. to 8 p.m.),
            seven days a week
          </Typography>
        </div>
      </Hidden>
    </div>

  );
};