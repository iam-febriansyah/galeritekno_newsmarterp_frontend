import React from 'react';
import Content from './Content';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux"

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MainLayout = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <Sidebar/>
      <Content/>
    </div>
  )
}

function mapState(state) {
  return {
    open: state.layout.open,
  }
}

export default connect(mapState)(MainLayout)

