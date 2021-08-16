import { useState } from 'react';
import { TextField, FormControlLabel, MenuItem, Radio, RadioGroup, FormLabel, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { styled } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
// import SearchIcon from '@material-ui/icons/Search';
// import { FiSearch } from 'react-icons/fi'
import Autocomplete from '@material-ui/lab/Autocomplete';

const styles = theme => ({
    root: {
        // width: '100%'
    },
    divide25: {
        width: '25%'
    },
    fullWidth: {
        width: '100%'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'calc(50% - 1rem)',
    },
    textFieldq: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'calc(25% - 1rem)',
    },
    textFieldqq: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'calc(75% - 1rem)',
    },
    textFieldFull: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'calc(100%)',
    },
    container: {
        width: 'calc(50%)',
    },
    displayFlex: {
        display: 'flex'
    },
    flexColumn: {
        display: 'flex',
        width: 'calc(50% - 1rem)',
        marginRight: theme.spacing(2),
        flexDirection: 'column'
    },
    titleSelection: {
        width: '80px'
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    }
});

const religions = [
    { idname: 'Islam', name: 'Islamic' },
    { idname: 'Kristen Katolik', name: 'Catholic' },
    { idname: 'Kristen Protenstan', name: 'Protestant Christians' },
    { idname: 'Budha', name: 'Buddhist' },
    { idname: 'Hindu', name: 'Hinduism' },
    { idname: 'Khonghucu', name: 'Confucianism' },
], bloodtypes = [
    { title: 'Rhesus+ A', value: 'A+' },
    { title: 'Rhesus+ B', value: 'B+' },
    { title: 'Rhesus+ AB', value: 'AB+' },
    { title: 'Rhesus+ O', value: 'O+' },
    { title: 'Rhesus- A', value: 'A-' },
    { title: 'Rhesus- B', value: 'B-' },
    { title: 'Rhesus- AB', value: 'AB-' },
    { title: 'Rhesus- O', value: 'O-' },
];

const bloodTypesOptions = bloodtypes.map((option) => {
    const firstLetter = option.title.slice(0,7)
    return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
    };
});


const RowContentStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1)
}));

const ColContentStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
}));

const InputGroupStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    "& > *:nth-child(1) > *": {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    "& > *:nth-child(2) > *": {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    }
}));



const titles = [
    {
        value: 'Mr',
        label: 'Mr.',
    },
    {
        value: 'Mrs',
        label: 'Mrs.',
    },
    {
        value: 'Dr',
        label: 'Dr.',
    },
    {
        value: 'Drs',
        label: 'Drs.',
    },
];

function RegistrationData(props) {
    const { classes } = props;
    const { errors, touched, getFieldProps } = props;
    const [selectedDate, setSelectedDate] = useState(new Date('1994-08-18T21:11:54'));
    const [title, setTitle] = useState('Mr.');
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    return (
        <ColContentStyle>
            <InputGroupStyle>
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    autoComplete="mr"
                    type="text"
                    label="Nomor Rekam Medik"
                    {...getFieldProps('medicalrecord')}
                    error={Boolean(touched.mr && errors.mr)}
                    helperText={touched.mr && errors.mr}
                />
                <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    className={classes.button}
                    endIcon={<div></div>}
                >
                    Search
                </Button>
            </InputGroupStyle>


            <TextField
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="ktp"
                type="text"
                label="NIK / ID"
                {...getFieldProps('ktp')}
                error={Boolean(touched.ktp && errors.ktp)}
                helperText={touched.ktp && errors.ktp}
            />
            <InputGroupStyle>
                <TextField
                    className={classes.titleSelection}
                    id="filled-select-currency"
                    select
                    margin="normal"
                    value={title}
                    onChange={handleChangeTitle}
                    variant="filled"
                >
                    {titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    autoComplete="name"
                    type="text"
                    label="Name"
                    {...getFieldProps('medicalrecord')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                />
            </InputGroupStyle>


            <TextField
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="ktp"
                type="text"
                label="NIK / ID"
                {...getFieldProps('ktp')}
                error={Boolean(touched.ktp && errors.ktp)}
                helperText={touched.ktp && errors.ktp}
            />
            <RadioGroup row aria-label="position" name="position" defaultValue="top" className={classes.textFieldFull}>
                <FormLabel component="legend">Gender</FormLabel>
                <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
            </RadioGroup>
            <RowContentStyle>
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    autoComplete="placebirth"
                    type="text"
                    label="Place Birth"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Birth Date"
                        format="MM/dd/yyyy"
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    className={classes.divide25}
                    margin="normal"
                    variant="filled"
                    fullWidth
                    autoComplete="umur"
                    disabled
                    type="text"
                    label="Umur"
                    {...getFieldProps('umur')}
                    error={Boolean(touched.umur && errors.umur)}
                    helperText={touched.umur && errors.umur}
                />
            </RowContentStyle>
            <Autocomplete
                id="grouped-demo"
                autoComplete="goldar"
                options={bloodTypesOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.value}
                margin="normal"
                renderInput={(params) => <TextField {...params} label="Blood Types" variant="outlined" />}
            />
            <TextField
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="goldar"
                disabled
                type="text"
                label="Golongan Darah"
                {...getFieldProps('goldar')}
                error={Boolean(touched.goldar && errors.goldar)}
                helperText={touched.goldar && errors.goldar}
            />
            <Autocomplete
                id="country-select-demo"
                options={religions}
                classes={{
                    option: classes.option,
                }}
                className={classes.fullWidth}
                autoHighlight
                margin="normal"
                getOptionLabel={(option) => option.name}
                renderOption={(option) => (
                    <>
                        <span style={{ margin: '0 0.5rem' }}>{option.idname} </span>
                        <i>{option.name}</i>
                    </>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a Religion"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                    />
                )}
            />
            <TextField
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="agama"
                disabled
                type="text"
                label="Agama"
                {...getFieldProps('agama')}
                error={Boolean(touched.agama && errors.agama)}
                helperText={touched.agama && errors.agama}
            />
            <TextField
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="cabang"
                disabled
                type="text"
                label="Cabang"
                {...getFieldProps('cabang')}
                error={Boolean(touched.cabang && errors.cabang)}
                helperText={touched.cabang && errors.cabang}
            />
        </ColContentStyle>
    )
}


export default withStyles(styles)(RegistrationData)