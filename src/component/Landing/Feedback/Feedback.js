import React, {useState} from 'react';
import {Button, Card, CircularProgress, Container, Grid, Snackbar, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as emailjs from 'emailjs-com';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  email: Yup.string().email('Invalid email').required('Field is required'),
  message: Yup.string().min(15, 'Minimum required word is 15').required('Field is required'),
});

const useStyles = makeStyles(theme => ({
  section: {
    //backgroundColor: '#faf9f8',
    paddingBottom: 100,
    paddingTop: 100,
    backgroundColor: '#f6f3b4',
    marginTop: 100
  },

  card: {
    width: '85%',
    padding: 50,
    borderRadius: 0,
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',

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
    marginBottom: 20,
    fontFamily: 'Raleway:wght@300',
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
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values, {resetForm, setSubmitting}) => {
    setSubmitting(false);
    emailjs.send('service_nekujb7', 'template_9llrdgj', {
      name: values.name,
      email: values.email,
      message: values.message,
    }, 'user_C1TJONTMJIrUJ7pSreQs7').then(res => {
      setSubmitting(false);
      setOpen(true);
      resetForm();
    }).catch(err => {
      setSubmitting(false);
    });
  };

  return (
    <div className={classes.section} id="feedback">
      <Container>
        <Formik initialValues={{name: '', email: '', message: ''}} onSubmit={handleSubmit}
                validationSchema={validationSchema}>
          {({
              values, handleChange, handleBlur,
              errors, isValid, isSubmitting, touched, ...formik
            }) => (
            <Form>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                  <Card className={classes.card}>
                    <div className={classes.feedbackText}>
                      <Typography className={classes.text}>
                        Write to Us
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item lg={6} xs={12}>
                          <TextField variant="outlined" margin="dense" label="Name" fullWidth required name="name"
                                     value={values?.name}
                                     helperText={touched['name'] && errors['name']}
                                     error={!!errors['name'] && touched['name']}
                                     onChange={handleChange}
                                     onBlur={handleBlur}/>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                          <TextField variant="outlined" margin="dense" type="email" label="Email" fullWidth
                                     required value={values?.email}
                                     name="email"
                                     helperText={touched['email'] && errors['email']}
                                     error={!!errors['email'] && touched['email']}
                                     onChange={handleChange}
                                     onBlur={handleBlur}/>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <TextField variant="outlined" label="Message" fullWidth
                                     required multiline minRows={4}
                                     name="message" value={values?.message}
                                     helperText={touched['message'] && errors['message']}
                                     error={!!errors['message'] && touched['message']}
                                     onChange={handleChange}
                                     onBlur={handleBlur}/>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <Button type="submit" disabled={!isValid && isSubmitting} onClick={() => {

                          }}
                                  variant="contained" color="primary" className={classes.button}>
                            {isValid && isSubmitting &&
                            <CircularProgress color="secondary"/>}Send</Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <Alert onClose={handleClose} severity="success">
          Thank you for your feedback.
        </Alert>
      </Snackbar>
    </div>
  );
};