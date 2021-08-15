import axios from 'axios';
import {
    Column,
    Lookup
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import CustomStore from 'devextreme/data/custom_store';
import React, { Fragment } from 'react';
import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import 'whatwg-fetch';
import { DataGridItemEditing, DataGridOptions, SmartERPDataGrid } from '../../components/devx';
import { DOCTORS } from '../../global/api-endpoint'

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

const masterDoctorsData = new CustomStore({
    key: 'BranchId',
    loadMode: 'raw',
    load: async () => {
        try {
            const response = await axios.get(DOCTORS.GETALL, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;

            if (response.status === 200) return data;

            return false
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    insert: async (values) => {
        try {
            const response = await axios.post(DOCTORS.POST, values, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    remove: async (key) => {
        try {
            const response = await axios.delete(DOCTORS.DELETE(key), { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    update: async (key, values) => {
        try {
            const response = await axios.put(DOCTORS.UPDATE(key), values, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    }
})

export default function Doctors() {
    const classes = useStyles();
    return (
        <Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" className={classes.link} >
                    <WhatshotIcon className={classes.icon} />
                    Master Data
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    Doctors
                </Typography>
            </Breadcrumbs>
            <SmartERPDataGrid id="Master Doctors" dataSource={masterDoctorsData}>
                {DataGridOptions({ fileName: "MasterDoctors" })}
                {[{ dataField: "DoctorId", caption: "ID", visible: false, fixed: true },
                { dataField: "NIK", caption: "NIK", fixed: true },
                { dataField: "STR", caption: "STR" },
                { dataField: "DoctorName", caption: "Name" },
                { dataField: "PlaceOfBirth", caption: "Place Birth" },
                { dataField: "DateOfBirth", caption: "Date Birth", dataType: "date" },
                { dataField: "Address", caption: "Address" },
                { dataField: "PhoneNo1", caption: "Phone" },
                { dataField: "PhoneNo2", caption: "Alt. Phone" },
                { dataField: "Religion", caption: "Religion" },
                { dataField: "Specialis", caption: "Specialis" },
                { dataField: "ExperienceDate", caption: "ExperienceDate", dataType: "date" },
                { dataField: "OperationalHour", caption: "Operational" },
                { dataField: "CreatedBy", caption: "Created By" },
                { dataField: "createdAt", caption: "Created At", dataType: "datetime" },
                { dataField: "ModifiedBy", caption: "Modified By" },
                { dataField: "updatedAt", caption: "Modified At", dataType: "datetime" }
                ].map(({ Lookups, ...rest }, index) => <Column key={index} {...rest}>
                    {Lookups && <Lookup {...Lookups} />}
                </Column>
                )}
                {DataGridItemEditing({
                    title: "Master Doctors",
                    itemGroup1: {
                        data: ["BranchName", "Address", "PhoneNo1", "PhoneNo2", "OperationalHour", "Latitude", "Longitude", "createdAt" ]
                    },
                    remark: "none"
                })}
            </SmartERPDataGrid>
        </Fragment>
    );
}
