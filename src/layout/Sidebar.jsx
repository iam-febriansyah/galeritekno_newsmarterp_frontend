import React from 'react';
import { List, Typography, IconButton, Drawer, Divider } from '@material-ui/core';

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import { routeConfig } from '../components/Sidebar/routeConfig'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavItemSimple, NavItemCollapse } from '../components/Sidebar/NavItem' 
import { connect } from "react-redux"
import { toggleSidebarMenu } from '../redux/reducers/layoutSlice'
import { useSelector, useDispatch } from 'react-redux'

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function Sidebar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { open, handleDrawerClose } = props;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routeConfig.map((element, key) => (
          <div key={key}>
            {element?.submenu ? <NavItemCollapse element={element}/> : <NavItemSimple element={element}/> }
             <Divider key={`divider-${key}`}/>
          </div>
        ))}
      </List>
    </div>
  );

  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography>
          -
          </Typography>
          <IconButton onClick={() => dispatch(toggleSidebarMenu(open))}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>
  );
}

function mapState(state) {
  return {
    open: state.layout.open,
  }
}

const mapDispatch = {
  toggleSidebarMenu,
};

export default connect(mapState, mapDispatch)(Sidebar)