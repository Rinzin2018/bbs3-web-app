import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  section: {
    // backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: '#3e3e3e',
    width: '100%',
    padding: 15,
    marginTop: 100,

    [theme.breakpoints.down('xs')]: {
      marginTop: 50
    }
  },

  copy: {
    marginTop: 15,
    color: 'white'
  },

  facebookIcon: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 15,
    marginTop: 10,
    color: '#4267B2',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },

  instagramIcon: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 15,
    color: ' #cd486b',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },

  linkedInIcon: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 15,
    color: '#0077b5',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
}));