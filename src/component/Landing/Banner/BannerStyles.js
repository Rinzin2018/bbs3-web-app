import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  mobileBanner: {
    height: '75vh',
    marginTop: '-57px',
    width: '100%',
    objectFit: 'cover'
  },
  bannerText: {
    marginTop: 250,
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      paddingRight: 0,
      textAlign: 'center'
    }
  },
  head: {
    fontWeight: 900,
  },
  notes: {
    marginTop: 30,
    marginRight: 10
  },
  div: {
    height: 500,
    width: '100%',
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,
    marginTop: 100,
    boxShadow: '2px 2px 4px #FFB900',

    [theme.breakpoints.down('md')]: {
      height: 380,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
      marginTop: 130,
    },

    [theme.breakpoints.down('sm')]: {
      height: 300,
      borderTopLeftRadius: 200,
      borderBottomRightRadius: 200,
    }
  },
  div1: {
    height: 500,
    width: '97%',
    backgroundColor: theme.primary,
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,

    [theme.breakpoints.down('md')]: {
      height: 380,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
    },

    [theme.breakpoints.down('sm')]: {
      height: 300,
      borderTopLeftRadius: 200,
      borderBottomRightRadius: 200,
    }
  },
  image: {
    height: 523,
    width: '97%',
    marginTop: '-25px',
    objectFit: 'cover',
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 350,

    [theme.breakpoints.down('md')]: {
      height: 400,
      borderTopLeftRadius: 250,
      borderBottomRightRadius: 250,
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      height: 320,
      width: '95%',
      borderTopLeftRadius: 200,
      borderBottomRightRadius: 200,
    }
  }
}));