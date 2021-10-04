import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/background.png';

export const useStyles = makeStyles(theme => ({
  bannerBackground: {
    backgroundImage: `url(${BackgroundImage})`,
    height: '92vh',
  },
  bannerText: {
    marginTop: '90%',
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: '100%',
      paddingRight: 0,
      textAlign: 'center'
    }
  },
  head: {
    fontWeight: 900,
    fontSize: 48,
    color: theme.primary,
    fontFamily: 'Raleway',
  },
  notes: {
    marginTop: 10,
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: 21,
    marginRight: 10
  },
}));