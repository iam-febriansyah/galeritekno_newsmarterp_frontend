import React from 'react';
import { Toolbar, Typography, IconButton, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import clsx from 'clsx';
import { connect } from "react-redux"
import { toggleSidebarMenu } from '../redux/reducers/layoutSlice'
import { useSelector, useDispatch } from 'react-redux'

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

const AppBarLayout = (props) => {
  const dispatch = useDispatch();
  const { open } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(toggleSidebarMenu(open))}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Smart ERP
        </Typography>
      </Toolbar>
    </AppBar>
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

export default connect(mapState, mapDispatch)(AppBarLayout)