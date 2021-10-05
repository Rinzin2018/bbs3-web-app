import React, {useEffect} from 'react';
import ReactPlayer from 'react-player/lazy';
import {Container, Grid, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import video from '../../../images/hello.mp4';
import video1 from '../../../images/hello1.mp4';
import video2 from '../../../images/hello2.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BackgroundWebImage from '../../../images/videoImageWeb.png';
import BackgroundMobileImage from '../../../images/mobileWebImage.png';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: `url(${BackgroundWebImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '150vh',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30
    }
  },
  mobileSection: {
    backgroundImage: `url(${BackgroundMobileImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '130vh',
  },
  quoteText: {
    fontWeight: 900,
    fontSize: 23,
    fontFamily: 'Raleway:wght@300',
    textAlign: 'center',
    color: '#636262'
  },
  container: {
    // padding: '0 100px 0 100px',
    paddingTop: '55%',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '115%',
    }
  },
}));

export const VideoSection = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({
      offset: 2,
      easing: 'ease-in-quad',
    });
  }, []);

  return (
    <div>
      <Hidden smUp={true}>
        <div className={classes.mobileSection}>
          <Container className={classes.container}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="100">
                <ReactPlayer url={video}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             height={'100%'}
                             playing={false}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="200">
                <ReactPlayer url={video1}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             playing={false}
                             height={'100%'}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="300">
                <ReactPlayer url={video2}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             height={'100%'}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
      <Hidden smDown={true}>
        <div className={classes.section}>
          {/*<Container>
        <Marquee speed={100}>
          <Typography className={classes.quoteText} data-aos="flip-up" data-aos-delay="200">
            Find the adventure in learning everyday on BBS Channel 3!
          </Typography>
        </Marquee>
      </Container>*/}
          <Container className={classes.container}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="100">
                <ReactPlayer url={video}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             height={'100%'}
                             playing={false}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="200">
                <ReactPlayer url={video1}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             playing={false}
                             height={'100%'}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-left" data-aos-delay="300">
                <ReactPlayer url={video2}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             height={'100%'}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hidden>
    </div>
  );
};