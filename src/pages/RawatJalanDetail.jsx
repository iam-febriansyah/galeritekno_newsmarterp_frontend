import { Button, Grid, Paper, makeStyles, Typography, TextField } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function RawatJalanDetail() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Button variant="outline" color="secondary" onClick={() => history.goBack()}>Back</Button>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography>Data Rawat Jalan</Typography>
                    <TextField variant="outlined" label="No Registrasi"/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
        </Grid>
    )
}
