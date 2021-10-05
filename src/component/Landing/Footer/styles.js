import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  section: {
    // backgroundImage: `url(${BackgroundImage})`,
    // backgroundColor: '#b78f36',
    width: '100%',
    padding: 15,
  },
  copy: {
    marginTop: 15,
    color: '#504f4f',
    fontFamily: 'Raleway:wght@300',
  },

  facebookIcon: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 10,
    marginTop: 10,
    color: '#4267B2',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },

  instagramIcon: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    color: ' #cd486b',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
}));