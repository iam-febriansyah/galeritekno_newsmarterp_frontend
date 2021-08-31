import { Button, Grid, Paper, makeStyles, Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
export default function RawatJalanDetail() {
    const history = useHistory();
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [value, setValue] = React.useState(0);  

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
            <Paper className={classes.paper}>
                <Typography className={classes.title}>Pemeriksaan dan Tindakan Dokter Poli</Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <Link to="">Fisik</Link>
                <Link to="">Diagnosa ICD-X</Link>
                <Link to="">Tindakan</Link>
                <Link to="">BHP</Link>
                <Link to="">Resep</Link>
                <Link to="">Pemeriksaan Lab</Link>
                <Link to="">Pemeriksaan Penunjang</Link>
                <Link to="">SOAP</Link>
                <Grid container spacing={3}>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Grid>
            </Paper>
        </Grid>
    )
}
