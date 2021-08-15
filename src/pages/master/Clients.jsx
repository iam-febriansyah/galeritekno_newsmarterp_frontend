import axios from 'axios';
import {
  Column,
  Lookup
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import CustomStore from 'devextreme/data/custom_store';
import React, { Fragment } from 'react';
import { Breadcrumbs, Link, makeStyles, Typography  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import 'whatwg-fetch';
import { DataGridItemEditing, DataGridOptions, SmartERPDataGrid } from '../../components/devx';
import { getClientsData } from '../../redux/reducers/master/clientsSlices'
import { useSelector, useDispatch } from 'react-redux';
import { CLIENTS } from '../../global/api-endpoint'
const URL = process.env.REACT_APP_DB;

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

class MasterClients extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterClientsData: new CustomStore({
        key: 'ClientId',
        loadMode: 'raw',
        load: () => {
          return axios
            .get(CLIENTS.GETALL, {headers: { Accept: 'application/json', 'Content-Type': 'application/json' }})
            .then((response) => {
              document.cookie = `SmartERPToken=${document?.cookie?.split('SmartERPToken=')[1]};max-age=900`;
              return response.data;
            })
            .catch((err) => {
              console.log(err);
              throw err;
            });
        },
        insert: (values) => {
          return axios
            .post(CLIENTS.POST, values, {headers: { Accept: 'application/json', 'Content-Type': 'application/json' }})
            .then((response) => {
              document.cookie = `SmartERPToken=${document?.cookie?.split('SmartERPToken=')[1]};max-age=900`;
              return response.data;
            })
            .catch((err) => {
              throw err.response.data.message;
            });
        },
        remove: (key) => {
          return axios
            .delete(CLIENTS.DELETE(key), {headers: { Accept: 'application/json', 'Content-Type': 'application/json' }})
            .then((response) => {
              document.cookie = `SmartERPToken=${document?.cookie?.split('SmartERPToken=')[1]};max-age=900`;
              return response.data;
            })
            .catch((err) => {
              throw err.response.data.message;
            });
        },
        update: (key, values) => {
          return axios
            .put(CLIENTS.UPDATE(key), values, {headers: { Accept: 'application/json', 'Content-Type': 'application/json' }})
            .then((response) => {
              document.cookie = `SmartERPToken=${document?.cookie?.split('SmartERPToken=')[1]};max-age=900`;
              return response.data;
            })
            .catch((err) => {
              throw err.response.data.message;
            });
        }
      })
    };
    this.onToolbarMasterClientsPreparing = this.onToolbarMasterClientsPreparing.bind(this);
    this.masterClientsDataGrid = null;
    this.onEditorMasterClientsPreparing = this.onEditorMasterClientsPreparing.bind(this);
  }

  refreshmasterClientsDataGrid() {
    this.masterClientsDataGrid.instance.refresh();
  }

  onToolbarMasterClientsPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        text: 'MasterClients List'
      },
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'refresh',
          onClick: this.refreshmasterClientsDataGrid.bind(this)
        }
      }
    );
  }

  onEditorMasterClientsPreparing(e) {
    e.editorOptions.showClearButton = true;
  }
  
  render() {
    const { masterClientsData } = this.state;
    const { HrEmployeeData:LUBHrData, ContractorData:LUBContractorData, isActive:LUBisActive } = this.context;
    // const classes = useStyles();
    return (
      <Fragment>
        <Breadcrumbs aria-label="breadcrumb">
            <Link
                color="inherit"
                // href="/getting-started/installation/"
                // onClick={handleClick}
                className={"classes.link"}
            >
             <WhatshotIcon className={"classes.icon"} />
                Master Data
            </Link>
            <Typography color="textPrimary" className={"classes.link"}>
                <GrainIcon className={"classes.icon"} />
                Clients
            </Typography>
        </Breadcrumbs>
        <SmartERPDataGrid id="Master Clients" dataSource={masterClientsData}>
          {DataGridOptions({fileName: "MasterClients"})}
          {[{dataField:"ClientId", caption:"ID", visible:false, fixed:true},
            {dataField:"Url", caption:"URL", fixed:true},
            {dataField:"IsActive", caption:"Active"},
            {dataField:"CreatedBy", caption:"Created By"},
            {dataField:"createdAt", caption:"Created At", dataType:"datetime"},
            {dataField:"ModifiedBy", caption:"Modified By"},
            {dataField:"updatedAt", caption:"Modified At", dataType:"datetime"}
          ].map(({Lookups, ...rest}, index) => <Column key={index} {...rest}>
              {Lookups && <Lookup {...Lookups} />}
            </Column>
          )}  
          {DataGridItemEditing({
            title: "Master Clients",
            itemGroup1: {
              data: ["Url","IsActive"]
            },
            remark: "none"
          })}
        </SmartERPDataGrid>
      </Fragment>
    );
  }
}
export default MasterClients;
