import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {Collapse} from 'reactstrap';
import {Drawer, Grid, Hidden, InputBase, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import ScheduleIcon from '@material-ui/icons/Schedule';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Search from '../../shared/Search';
import {Link} from 'react-scroll';
import {useStyles} from './Styles';

export const Appbar = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const handleSearch = (searchId) => {
    document.getElementById(searchId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    setSearch('');
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
        <Link to="banner" spy={true} smooth={true} onClick={toggleDrawer(anchor, false)}>
          <ListItem button>
            <ListItemIcon><HomeIcon style={{color: '#4e34b5'}}/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="schedule" spy={true} smooth={true} onClick={toggleDrawer(anchor, false)}>
          <ListItem button>
            <ListItemIcon><ScheduleIcon style={{color: '#4e34b5'}}/></ListItemIcon>
            <ListItemText>Schedule</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="about" spy={true} smooth={true} onClick={toggleDrawer(anchor, false)}>
          <ListItem button>
            <ListItemIcon><InfoIcon style={{color: '#4e34b5'}}/></ListItemIcon>
            <ListItemText>About Us</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="feedback" spy={true} smooth={true} onClick={toggleDrawer(anchor, false)}>
          <ListItem button>
            <ListItemIcon><FeedbackIcon style={{color: '#4e34b5'}}/></ListItemIcon>
            <ListItemText>Feedback</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar className={classes.appbar} position="absolute">
        <Toolbar>
          <Grid container>
            <Grid item lg={4} md={6} sm={3} xs={4}>
              <a href="/">
                <img src={require('../../images/bbs3-logo.png').default} className={classes.logo} alt=""/>
              </a>
            </Grid>
            <Hidden xsDown={true}>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <Link to="banner" spy={true} smooth={true}>
                  <Typography variant="h6" className={classes.nav}>Home</Typography>
                </Link>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <Link to="schedule" spy={true} smooth={true}>
                  <Typography variant="h6" className={classes.nav}>Schedule</Typography>
                </Link>
              </Grid>
              <Grid item lg={1} md={1} sm={2} xs={1} align="center">
                <Link to="about" spy={true} smooth={true}>
                  <Typography variant="h6" className={classes.nav}>About Us</Typography>
                </Link>
              </Grid>
              <Grid item lg={1} md={1} sm={2} xs={1}>
                <Link to="feedback" spy={true} smooth={true}>
                  <Typography variant="h6" className={classes.nav}>Feedback</Typography>
                </Link>
              </Grid>
            </Hidden>
            <Grid item lg={1} md={1} sm={2} xs={6} align="center">
              <Hidden xsDown={true}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon/>
                  </div>
                  <InputBase
                    onChange={(e) => setSearch(e?.target?.value)}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        if (search?.[0] === 'A' || search?.[0] === 'a') {
                          handleSearch('about');
                        } else if (search?.[0] === 'F' || search?.[0] === 'f') {
                          handleSearch('feedback');
                        } else if (search?.[0] === 'S' || search?.[0] === 's') {
                          handleSearch('schedule');
                        }
                      }
                    }}
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                  />
                </div>
              </Hidden>
              <Hidden smUp={true}>
                <SearchIcon className={classes.searchMobile} onClick={toggle}/>
              </Hidden>
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
                <Search placeholder="Search..." style={{marginTop: 20}} onChange={(e) => setSearch(e?.target?.value)}
                        onKeyDown={(e) => {
                          if (e.keyCode === 13) {
                            if (search?.[0] === 'A' || search?.[0] === 'a') {
                              handleSearch('about');
                            } else if (search?.[0] === 'F' || search?.[0] === 'f') {
                              handleSearch('feedback');
                            } else if (search?.[0] === 'S' || search?.[0] === 's') {
                              handleSearch('schedule');
                            }
                          }
                        }}/>
              </Collapse>
            </Grid>
            }
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </React.Fragment>
  );
};
