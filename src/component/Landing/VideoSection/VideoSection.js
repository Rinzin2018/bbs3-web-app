import React from 'react';
import ReactPlayer from 'react-player/lazy';
import {Container, Grid, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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

  return (
    <div className={classes.section}>
      <Container>
        <Grid container spacing={2}>
          <Hidden smDown={true}>
            <Grid item lg={9} md={9}>
              <ReactPlayer url="http://edu.dcpl.bt/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY3M9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--78345a83f42a0c3d64927df6288651a1fc2999db/States%20of%20matter%20for%20kids%20-%20What%20are%20the%20states%20of%20matter%20Solid,%20liquid%20and%20gas.mp4"
                           controls={true}
                           volume={9}
                           muted={true}
                           width={'100%'}
                           height={416}
                           playing={true}
              />
            </Grid>
          </Hidden>
          <Hidden smUp={true}>
            <Grid item xs={12}>
              <ReactPlayer url="https://www.youtube.com/watch?v=J2Y7pSCMMWk"
                           controls={true}
                           volume={9}
                           muted={true}
                           width={'100%'}
                           height={300}
                           playing={true}
              />
            </Grid>
          </Hidden>
          <Grid item lg={3} md={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <ReactPlayer url="../../../images/hello.mp4"
                             controls={true}
                             volume={9}
                             muted={true}
                             width={'100%'}
                             playing={true}
                             height={200}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <ReactPlayer url="https://www.youtube.com/watch?v=Gkhs-HHc3jk"
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