import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../../../images/footer.png';

export const useStyles = makeStyles(theme => ({
  section: {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100%',
    marginTop: 150,
    paddingTop: 200,
  },

  logo: {
    height: 80,
    marginLeft: 45,
  },

  head: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 50,
  },

  content: {
    color: '#fff',
    marginTop: 30,
    marginLeft: 150,
    marginBottom: 70
  },

  link: {
    marginLeft: 12,
    textDecoration: 'none',
  },

  follow: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 80,
    marginLeft: 150,
  },

  icon: {
    display: 'flex',
    marginTop: 30,
    marginLeft: 145
  },

  facebookIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: '#4267B2',
  },

  instagramIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: ' #cd486b',
  },

  linkedInIcon: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderRadius: 50,
    padding: '5px 5px 5px 5px',
    marginRight: 20,
    color: '#0077b5',
  },

  contact: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 80,
    marginLeft: 150,
  },

  // Mobile View

  section1: {
    backgroundColor: '#FEA000',
    padding: '5px 0 150px 0',
    marginTop: 30,
    width: '100%',
  },

  logoMobile: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 6
  },

  headMobile: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 20,
    fontSize: 16
  },

  contentMobile: {
    color: '#fff',
    marginLeft: 20,
    fontSize:15
  },

  linkMobile: {
    textDecoration: 'none',
  },

  followMobile: {
    color: '#fff',
    fontWeight: 700,
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16
  },

  contactMobile: {
    color: '#fff',
    fontWeight: 700,
    marginTop: 57,
    marginLeft: 6,
    marginBottom: 4,
    fontSize: 16
  },

  iconMobile: {
    display: 'flex',
    marginBottom: 6,
  },

  facebookIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    marginRight: 10,
    marginLeft: 20,
    color: '#4267B2',
  },

  instagramIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    color: '#4267B2',
  },

  linkedInIconMobile: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    borderRadius: 40,
    padding: '3px 3px 3px 3px',
    marginLeft: 10,
    color: '#4267B2',
  }
}))