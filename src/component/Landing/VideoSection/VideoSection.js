import React from 'react';
import ReactPlayer from 'react-player/lazy';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import video from '../../../images/hello.mp4';
import video1 from '../../../images/hello1.mp4';
import video2 from '../../../images/hello2.mp4';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 100,
    [theme.breakpoints.down('xs')]: {
      marginTop: 30
    }
  },
  wrapper: {
    position: 'relative',
  }
}));

export const VideoSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Container>
        <Grid container spacing={1}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ReactPlayer url={video}
                         controls={true}
                         volume={9}
                         muted={true}
                         width={'100%'}
                         height={'100%'}
                         playing={false}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ReactPlayer url={video1}
                         controls={true}
                         volume={9}
                         muted={true}
                         width={'100%'}
                         playing={false}
                         height={'100%'}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
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