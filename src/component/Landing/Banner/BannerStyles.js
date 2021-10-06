import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/background.png';
import BackgroundMobileImage from '../../../images/mobileBackground.png';

export const useStyles = makeStyles(theme => ({
  largeDevice: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  bannerBackground: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    height: '92vh',

    [theme.breakpoints.down('md')]: {
      height: '60vh'
    }
  },
  smallDevice: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  bannerMobileBackground: {
    backgroundImage: `url(${BackgroundMobileImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '80vh',
  },
  logo: {
    marginTop: '50%',
    width: 250,
    height: 200,

    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
      width: 100,
      height: 100,
    }
  },
  bannerText: {
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      textAlign: 'center'
    }
  },
  head: {
    fontWeight: 900,
    fontSize: 48,
    color: theme.secondary,
    fontFamily: 'Raleway:wght@300',

    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    }
  },
}));