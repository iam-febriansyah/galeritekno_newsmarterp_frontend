import { Column, Lookup } from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { useSelector, useDispatch } from 'react-redux'
import React, { Fragment } from 'react';
import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import 'whatwg-fetch';
import { DataGridItemEditing, DataGridOptions, SmartERPDataGrid } from '../components/devx';

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

const dummyData = [
    {id: 1, poliklinik: "Poli Jantung", dokter: "dr. Wiwik", noreg: "REG001", pasien: "Dwi Pratama", tempatlahir: "Jombang", tanggallahir: "1986-09-17", jeniskelamin: "Pria", alamat: "Bekasi"},
    {id: 2, poliklinik: "Poli Jantung", dokter: "dr. Wiwik", noreg: "REG002", pasien: "Dwi Pratama", tempatlahir: "Jombang", tanggallahir: "1986-09-17", jeniskelamin: "Pria", alamat: "Bekasi"},
    {id: 3, poliklinik: "Poli Jantung", dokter: "dr. Wiwik", noreg: "REG003", pasien: "Dwi Pratama", tempatlahir: "Jombang", tanggallahir: "1986-09-17", jeniskelamin: "Pria", alamat: "Bekasi"}
]

export default function RawatJalan() {
    const branchesStore = useSelector((state) => state.master.branches);
    const dispatch = useDispatch();
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
                    Branches
                </Typography>
            </Breadcrumbs>
            <SmartERPDataGrid id="Master Branches" dataSource={dummyData}>
                {DataGridOptions({ fileName: "MasterBranches" })}
                {[{ dataField: "id", caption: "ID", visible: false, fixed: true },
                { dataField: "poliklinik", caption: "Poliklinik", fixed: true },
                { dataField: "dokter", caption: "Dokter" },
                { dataField: "noreg", caption: "No Registrasi" },
                { dataField: "pasien", caption: "Nama Pasien" },
                { dataField: "tempatlahir", caption: "Tempat Lahir" },
                { dataField: "tanggallahir", caption: "Tanggal Lahir", dataType: "date" },
                { dataField: "jeniskelamin", caption: "Jenis Kelamin" },
                { dataField: "alamat", caption: "Alamat" },
                ].map(({ Lookups, ...rest }, index) => <Column key={index} {...rest}>
                    {Lookups && <Lookup {...Lookups} />}
                </Column>
                )}
                {DataGridItemEditing({
                    title: "Master Branches",
                    itemGroup1: {
                        data: ["BranchName", "Address", "PhoneNo1", "PhoneNo2", "OperationalHour", "Latitude", "Longitude", "createdAt" ]
                    },
                    remark: "none"
                })}
            </SmartERPDataGrid>
        </Fragment>
    );
}
