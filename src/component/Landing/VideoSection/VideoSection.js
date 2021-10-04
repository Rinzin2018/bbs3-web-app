import React, {useEffect} from 'react';
import ReactPlayer from 'react-player/lazy';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import video from '../../../images/hello.mp4';
import video1 from '../../../images/hello1.mp4';
import video2 from '../../../images/hello2.mp4';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 100,
    [theme.breakpoints.down('xs')]: {
      marginTop: 30
    }
  },
  div: {
    padding: 30,
    backgroundColor: theme.secondary
  },
  quoteText: {
    fontWeight: 400,
    fontSize: 21,
    fontFamily: 'Raleway',
    textAlign: 'center',
  },
  container: {
    padding: '0 100px 0 100px',
    marginTop: 100,

    [theme.breakpoints.down('sm')]: {
      padding: 15
    }
  },
}));

export const VideoSection = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({
      offset: 3,
      easing: 'ease-in-quad',
    });
  }, []);

  return (
    <div className={classes.section}>
      <div className={classes.div}>
        <Typography className={classes.quoteText} data-aos="flip-up" data-aos-delay="200">
          Find the adventure in learning everyday on BBS Channel 3
        </Typography>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={1}>
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
  );
};