import * as Yup from 'yup';
import { RegistrationData, PaymentData, PersonalData } from '../components/RegistrationOffline'

import React from 'react'
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPageOffline() {
    const navigate = useNavigate();

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
    
    return (
        <FormikProvider value={formik}>
            <Form>
                <RegistrationData />
            </Form>
        </FormikProvider>
    )
}
