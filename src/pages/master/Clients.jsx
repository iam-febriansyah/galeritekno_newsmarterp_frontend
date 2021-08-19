import { Column, Lookup } from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { useSelector, useDispatch } from 'react-redux'
import React, { Fragment } from 'react';
import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import 'whatwg-fetch';
import { DataGridItemEditing, DataGridOptions, SmartERPDataGrid } from '../../components/devx';

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

export default function Clients() {
    const clientsStore = useSelector((state) => state.master.clients);
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
                    Clients
                </Typography>
            </Breadcrumbs>
            <SmartERPDataGrid id="Master Clients" dataSource={clientsStore}>
                {DataGridOptions({ fileName: "MasterClients" })}
                {[{ dataField: "ClientId", caption: "ID", visible: false, fixed: true },
                { dataField: "Url", caption: "URL", fixed: true },
                { dataField: "IsActive", caption: "Active" },
                { dataField: "CreatedBy", caption: "Created By" },
                { dataField: "createdAt", caption: "Created At", dataType: "datetime" },
                { dataField: "ModifiedBy", caption: "Modified By" },
                { dataField: "updatedAt", caption: "Modified At", dataType: "datetime" }
                ].map(({ Lookups, ...rest }, index) => <Column key={index} {...rest}>
                    {Lookups && <Lookup {...Lookups} />}
                </Column>
                )}
                {DataGridItemEditing({
                    title: "Master Clients",
                    itemGroup1: {
                        data: ["Url", "IsActive"]
                    },
                    remark: "none"
                })}
            </SmartERPDataGrid>
        </Fragment>
    );
}
