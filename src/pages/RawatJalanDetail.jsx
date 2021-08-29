import { Button, Grid, Paper, makeStyles, Typography, TextField } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      width: '100%'
    },
    full: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
  }));
  

export default function RawatJalanDetail() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => history.goBack()}>Back</Button>
            </Grid>
            <Paper className={classes.paper}>
                <Grid item xs={6}>
                        <Typography>Data Rawat Jalan</Typography>
                        <TextField variant="outlined" label="No Registrasi" className={classes.full}/>
                        <TextField variant="outlined" label="NIK" className={classes.full}/>
                        <TextField variant="outlined" label="Nama" className={classes.full}/>
                        <TextField variant="outlined" label="Tanggal Lahir" className={classes.full}/>
                        <TextField variant="outlined" label="Umur" className={classes.full}/>
                        <TextField variant="outlined" label="Jenis Kelamin" className={classes.full}/>
                    
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Paper>
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
