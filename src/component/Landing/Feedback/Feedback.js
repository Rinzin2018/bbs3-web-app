import React, {useState} from 'react';
import {
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
  section: {},

  card: {
    width: '85%',
    padding: 50,
    borderRadius: 0,
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '30px 20px 30px 20px',
    }
  },
  feedbackText: {
    marginLeft: 100,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  text: {
    textAlign: 'left',
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: 0.5,
    marginBottom: 20
  },
  button: {
    textTransform: 'capitalize',
    width: 150,
    color: 'white',
    fontWeight: 900,
    borderRadius: 25,
    float: 'left',
    height: 45,
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));
export const Feedback = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.send(process.env.GATSBY_EMAIL_SERVICE_ID, process.env.GATSBY_EMAIL_TEMPLATE_ID, {
      name: name,
      email: email,
      message: message,
    }, process.env.GATSBY_EMAIL_USER_ID).then(res => {
      setEmail('');
      setName('');
      setMessage('');
    });
  };

  return (
    <div className={classes.section} id="feedback">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} align="center">
            <Card className={classes.card}>
              <div className={classes.feedbackText}>
                <Typography className={classes.text}>
                  Share your feedback!
                </Typography>
                <Grid container spacing={1}>
                  <Grid item lg={6} xs={12}>
                    <TextField variant="outlined" margin="dense" label="Name" fullWidth value={name}
                               onChange={(e) => setName(e?.target?.value)}/>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField variant="outlined" margin="dense" type="email" label="Email" fullWidth value={email}
                               onChange={(e) => setEmail(e?.target?.value)}/>
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <TextareaAutosize aria-label="minimum height" minRows={5} value={message}
                                      color="primary"
                                      onChange={(e) => setMessage(e?.target?.value)}
                                      placeholder="Describe your experience here..."
                                      style={{
                                        borderRadius: 5,
                                        border: 'none',
                                        width: '100%',
                                        padding: 20,
                                        backgroundColor: '#eae9e9'
                                      }}
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <Button onClick={(e) => {
                      setLoading(true);
                      setTimeout(function () {
                        setLoading(false);
                      }, 3000);
                      handleSubmit(e);
                    }} variant="contained" color="secondary" className={classes.button}>
                      {loading &&
                      <CircularProgress color="secondary"/>}Send</Button>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};