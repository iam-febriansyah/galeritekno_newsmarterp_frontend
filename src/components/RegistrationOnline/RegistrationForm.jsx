import * as Yup from 'yup';
import 'date-fns';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';

import { withStyles } from '@material-ui/core/styles';

import { TextField, FormControlLabel, Button, Radio, RadioGroup, FormLabel } from '@material-ui/core';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const styles = theme => ({
    root: {
        // width: '100%'
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
    }
});


function RegistrationForm(props) {
    const { classes } = props;
    const navigate = useHistory();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        fullname: Yup.string().required('Enter Your Name').required('Name is Required'),
        phone: Yup.string().required('Enter Valid Phone Number').required('Phone is Required'),
        ktp: Yup.string().required('Enter Valid KTP Number').required('KTP is Required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            ktp: '',
            password: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            navigate('/dashboard', { replace: true });
        }
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const [selectedDate, setSelectedDate] = useState(new Date('1994-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.root}>
                <div>
                    <TextField
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        autoComplete="ktp"
                        type="text"
                        label="Nomor KTP / NIK"
                        {...getFieldProps('ktp')}
                        error={Boolean(touched.ktp && errors.ktp)}
                        helperText={touched.ktp && errors.ktp}
                    />

                    <TextField
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        autoComplete="full-name"
                        type="text"
                        label="Full Name"
                        {...getFieldProps('fullname')}
                        error={Boolean(touched.fullname && errors.fullname)}
                        helperText={touched.fullname && errors.fullname}
                    />
                </div>
                <div className={classes.displayFlex}>
                    <div className={classes.container}>
                        <TextField
                            className={classes.textFieldq}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            type="prefix"
                            defaultValue="+62"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className={classes.textFieldqq}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            autoComplete="phone"
                            type="text"
                            label="Phone Number"
                            {...getFieldProps('phone')}
                            error={Boolean(touched.phone && errors.phone)}
                            helperText={touched.phone && errors.phone}
                        />
                    </div>
                    <TextField
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                </div>
                <div>
                    <TextField
                        className={classes.textField}
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
                            className={classes.textField}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>

                </div>
                <div className={classes.displayFlex}>
                    <div className={classes.flexColumn}>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top" className={classes.textFieldFull}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                        <TextField
                            className={classes.textFieldFull}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            autoComplete="username"
                            type="text"
                            label="text"
                        />
                    </div>

                    <TextField
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        rows={5}
                        multiline
                        autoComplete="address"
                        type="text"
                        label="Address"
                    />
                </div>

                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    loading={isSubmitting}
                >
                    Next
                </Button>
            </Form>
        </FormikProvider>
    );
}

export default withStyles(styles)(RegistrationForm)