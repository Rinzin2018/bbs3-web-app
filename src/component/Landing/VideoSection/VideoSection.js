import React, {useState} from 'react';
import ReactPlayer from 'react-player';
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
}));

export const VideoSection = () => {
  const classes = useStyles();
  const [mainPlay, setMainPlay] = useState(video);
  const [sidePlay1, setSidePlay1] = useState(video1);
  const [sidePlay2, setSidePlay2] = useState(video2);

  return (
    <div className={classes.section}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <ReactPlayer url={mainPlay}
                         controls={true}
                         volume={9}
                         muted={true}
                         width={'100%'}
                         height={416}
                         playing={true}
            />
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <ReactPlayer url={sidePlay1}
                             onPlay={() => {
                               setSidePlay1(video);
                               setSidePlay2(video2);
                               setMainPlay(video1);
                             }}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             playing={false}
                             height={200}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <ReactPlayer url={sidePlay2}
                             onPlay={() => {
                               setSidePlay1(video1);
                               setSidePlay2(video);
                               setMainPlay(video2);
                             }}
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             height={200}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};