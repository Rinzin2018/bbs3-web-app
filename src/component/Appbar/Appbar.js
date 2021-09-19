import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {Collapse} from 'reactstrap';
import {Drawer, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import ScheduleIcon from '@material-ui/icons/Schedule';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Search from '../../shared/Search';

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    height: 170
  },
  logo: {
    width: 150,
    height: 150,
    marginLeft: 20,

    [theme.breakpoints.down('xs')]: {
      marginTop: 15,
      marginLeft: 0,
      height: 50,
      width: 100
    }
  },
  nav: {
    fontFamily: 'Nunita',
    marginTop: 45
  },
  search: {
    marginTop: 45,
    fontSize: 35,
    color: 'gray',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      marginTop: 25,
      fontSize: 30,
      color: 'gray',
    }
  },
  list: {
    width: 250,
    paddingTop: 20,
  },
  fullList: {
    width: 'auto',
  },
  menu: {
    marginTop: 25
  }
}));

function HideOnScroll(props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({target: window ? window() : undefined});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const Appbar = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon style={{color: '#4e34b5'}}/></ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><ScheduleIcon style={{color: '#4e34b5'}}/></ListItemIcon>
          <ListItemText>Schedule</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><InfoIcon style={{color: '#4e34b5'}}/></ListItemIcon>
          <ListItemText>About Us</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><FeedbackIcon style={{color: '#4e34b5'}}/></ListItemIcon>
          <ListItemText>Feedback</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline/>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Grid container>
              <Grid item lg={7} md={7} sm={7} xs={7}>
                <img src={require('../../images/logo.png').default} className={classes.logo} alt=""/>
              </Grid>
              <Hidden xsDown={true}>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                  <Typography variant="h6" className={classes.nav}>Home</Typography>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                  <Typography variant="h6" className={classes.nav}>Schedule</Typography>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                  <Typography variant="h6" className={classes.nav}>About Us</Typography>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                  <Typography variant="h6" className={classes.nav}>Feedback</Typography>
                </Grid>
              </Hidden>
              <Grid item lg={1} md={1} sm={3} xs={3} align="center">
                <SearchIcon className={classes.search} onClick={toggle}/>
              </Grid>
              <Hidden smUp={true}>
                <Grid item xs={1}/>
                <Grid item xs={1} sm={6} align="right">
                  <div>
                    {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <MenuIcon className={classes.menu} variant="contained"
                                  onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </Grid>
              </Hidden>
              {isOpen &&
              <Grid item lg={12} xs={12}>
                <Collapse isOpen={isOpen}>
                  <Search placeholder="Search..." style={{marginTop: 20}}/>
                </Collapse>
              </Grid>
              }
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar/>
    </React.Fragment>
  );
};
