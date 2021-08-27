import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, makeStyles, InputAdornment, IconButton, Grid } from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle, Lock, Email } from '@material-ui/icons';
import { connect } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import { loginUser, clearState } from '../../redux/reducers/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '&:before': {
      backgroundColor: 'whitesmoke',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '60%',
      content: `''`
    },
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    margin: 0,
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 800,
    maxHeight: 600,
  },
  authContainer: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: 'calc(80vw)',
    height: 'calc(80vh)',
    maxWidth: '640px',
    maxHeight: '480px',
    border: '1px solid rgba(229, 229, 229, 0.8)',
    borderRadius: '0.25em',
    backgroundColor: 'white',
    backgroundImage: `url("")`,
    backgroundSize: '65%',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '400%',
    backgroundPositionX: '-50%',
    boxShadow: '0 1px 1px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 12%), 0 8px 8px rgb(0 0 0 / 12%), 0 16px 16px rgb(0 0 0 / 12%)',
  },
  left: {
    borderRight: '1px solid rgba(229, 229, 229, 0.8)',
    boxShadow: '3px 0 3px -1px rgb(0 0 0 / 12%)',
    padding: theme.spacing(4)
  },
  right: {
    padding: theme.spacing(4)
  },
  margin: {
    marginBottom: theme.spacing(4) 
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default connect( null, {})((props) => {
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  const classes = useStyles();
  const [values, setValues] = useState({
    UserName: '',
    UserPassword: '',
    showPassword: false,
  });

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  },[dispatch])

  useEffect(() => {
    if (users.isError) {
      setError(users.errorMessage);
      dispatch(clearState());
    }

    if (users.isSuccess) {
      dispatch(clearState());
      setError(null)

    }

  }, [dispatch, history, users.errorMessage, users.isError, users.isSuccess]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { UserName, UserPassword } = values;
    if (UserName === '' || UserPassword === '') {
      setError(`${!UserName && !UserPassword ? "username and password are required" : !UserName ? "username is required" : "password is required"}`);
      return;
    }
    dispatch(loginUser({ UserName, UserPassword }));
    
    if(users.isError && !users.isSuccess) setError(users.errorMessage)
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        
        <Grid className={classes.authContainer}>
          <Grid item xs={6} className={classes.left}>
            <Typography variant="h4" fontWeight="fontWeightBold" className={classes.margin}>Smart ERP</Typography>
            <Typography variant="h5" fontWeight="fontWeightBold" className={classes.margin}>Smart ERP system build with React</Typography>
              
          </Grid>
          <Grid item xs={6} className={classes.right}>
            <form onSubmit={submitForm}>
              <Typography variant="h3" fontWeight="fontWeightBold" className={classes.margin}>Login</Typography>
              <TextField className={classes.margin} label="Login ID" variant="outlined" fullWidth type="text" value={values.UserName} onChange={(e) => setValues({ ...values, UserName: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle/>
                    </InputAdornment>
                  )
                }}
              />
              <TextField className={classes.margin} label="Password" variant="outlined" fullWidth type={values.showPassword ? 'text' : 'password'} value={values.UserPassword} onChange={(e) => setValues({ ...values, UserPassword: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <Lock/>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton  aria-label="toggle password visibility"  onClick={handleClickShowPassword}  onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button className={classes.margin} variant="contained" color="primary" fullWidth type="submit" size="large" onClick={submitForm}>Login</Button>
              
              {error && (
                <Alert severity="error" onClick={() => setError(null)}>
                  {props.error || error}
                </Alert>
              )}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
});
