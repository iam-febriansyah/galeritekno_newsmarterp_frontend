import { Button, Grid, Paper, makeStyles, Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react'
import { useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
    },
    title: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

const doctorName = [
    { name: 'dr. Wiwik'},
    { name: 'dr. Andre'},
    { name: 'dr. Bobi'},
  ];
export default function RawatJalanDetail() {
    const history = useHistory();
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => history.goBack()}>Back</Button>
            </Grid>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>Data Rawat Jalan</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="No Registrasi" className={classes.full} />
                        <TextField variant="outlined" label="NIK" className={classes.full} />
                        <TextField variant="outlined" label="Nama" className={classes.full} />
                        <TextField variant="outlined" label="Tanggal Lahir" className={classes.full} />
                        <TextField variant="outlined" label="Umur" className={classes.full} />
                        <TextField variant="outlined" label="Jenis Kelamin" className={classes.full} />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            id="combo-box-doctor"
                            options={doctorName}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField className={classes.full}{...params} label="Doctor" variant="outlined" />}
                        />
                        <Autocomplete
                            id="combo-box-condition"
                            options={[{condition: "rawat"}, {condition: "jalan"}]}
                            getOptionLabel={(option) => option.condition}
                            renderInput={(params) => <TextField className={classes.full} {...params} label="Kondisi Masuk" variant="outlined" />}
                        />
                        <Autocomplete
                            id="combo-box-complete"
                            options={[{complete: "Tidak"}, {complete: "Ya"}]}
                            defaultValue={[{complete: "Tidak"}, {complete: "Ya"}][0]}
                            getOptionLabel={(option) => option.complete}
                            renderInput={(params) => <TextField className={classes.full} {...params} label="Selesai" variant="outlined" />}
                        />
                        <Autocomplete
                            id="combo-box-carakeluar"
                            options={[{method:"any"}, {method: "custom"}]}
                            getOptionLabel={(option) => option.method}
                            renderInput={(params) => <TextField className={classes.full} {...params} label="Cara Keluar" variant="outlined" />}
                        />
                        <Autocomplete
                            id="combo-box-kondisikeluar"
                            options={[{method:"any"}, {method: "custom"}]}
                            getOptionLabel={(option) => option.method}
                            renderInput={(params) => <TextField className={classes.full} {...params} label="Kondisi Keluar" variant="outlined" />}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker margin="normal" className={classes.full} id="date-picker-dialog" label="Tanngal Keluar" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{     'aria-label': 'change date', }}/>
                                </Grid>
                                <Grid item xs={6}><KeyboardTimePicker margin="normal" className={classes.full} id="time-picker" label="Jam Keluar" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change time' }}/></Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
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
