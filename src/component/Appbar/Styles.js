import {alpha, makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    position: 'sticky',
    height: 80,

    [theme.breakpoints.down('xs')]: {
      height: 70
    }
  },
  logo: {
    height: '100%',
    marginLeft: 20,
    cursor: 'pointer',

    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginLeft: 0,
      height: 55,
      width: 60
    },
  },
  nav: {
    marginTop: 25,
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: 'Raleway:wght@300',

    '&:hover': {
      color: theme.primary,
      transition: '.6s',
    },

    [theme.breakpoints.down('md')]:{
      fontSize: 16,
      marginTop: 30,
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: 14,
      marginTop: 30,
    }
  },
  /*search: {
    marginTop: 45,
    fontSize: 35,
    color: 'gray',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      marginTop: 25,
      fontSize: 30,
      color: 'gray',
    }
  },*/
  list: {
    width: 250,
    paddingTop: 20,
  },
  fullList: {
    width: 'auto',
  },
  menu: {
    marginTop: 25
  },
  searchMobile:{
    marginTop: 28
  },
  search: {
    position: 'relative',
    marginTop: 20,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      marginTop: 20,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#656161',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#656161',
    borderRadius: 5,

    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '35ch',
      },
    },
    "&:hover":{
      border: '1px solid #FFD25C',
      borderRadius: 25,
      transition: '.6s',
    }
  },
}));