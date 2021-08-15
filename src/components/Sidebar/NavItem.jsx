import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

import {
  Send as SendIcon,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons/';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  100: {
    paddingLeft: theme.spacing(0),
  },
  101: {
    paddingLeft: theme.spacing(2),
  },
  102: {
    paddingLeft: theme.spacing(4),
  },
  103: {
    paddingLeft: theme.spacing(6),
  },
  104: {
    paddingLeft: theme.spacing(8),
  },
  105: {
    paddingLeft: theme.spacing(10),
  },
  106: {
    paddingLeft: theme.spacing(12),
  },
}));

const getIdNest = (props) => {
  let { id } = props;
  return id || getIdNest(props.parentNode);
};

export function NavItemSimple({ element }) {

  return (
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Sent mail" />
    </ListItem>
  );
}

const NavItem = ({listelement, classes, item}) => {
  const { path } = listelement
  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => {
      // console.log(itemProps)
    return <Link to={path} ref={ref} {...itemProps} />}),
    [path],
  );


  return  <ListItem component={renderLink} button className={classes[100 + item.indent % 4]} key={`${item.name}-${listelement.name}-${item.indent}`}>
    <ListItemIcon>
      {React.createElement(listelement.icon)}
    </ListItemIcon>
    <ListItemText primary={listelement.name} />
  </ListItem>
}

const NavItemRecrusives = (item) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState({});
  const handleClick = (props) => {
    setOpen({
      ...open,
      [getIdNest(props.target)]: !open[getIdNest(props.target)],
    });
  };

  
  const { submenu } = item;
  return (
    <div key={`${item.name}`}>
      <ListItem button onClick={handleClick} id={item.indent} className={classes[100 + item.indent % 4]} key={`${item.name}-${item.indent}`}>
        <ListItemIcon>
          {React.createElement(item.icon, {}, null)}
        </ListItemIcon>
        <ListItemText primary={item.name} />
        {open[item.indent] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open[item.indent]} timeout="auto" unmountOnExit className={classes[100 + item.indent % 4]} key={`${item.name}-${item.indent}-collapse`}>
        <List component="div" disablePadding>
        {submenu.map((listelement, index) => {
          return listelement?.submenu 
            ? NavItemRecrusives(listelement) 
            : NavItem({listelement, classes, item})
        })}
        </List>
      </Collapse>
    </div>
  );
};

export function NavItemCollapse({ element, key }) {

  return (
    <>
      {NavItemRecrusives(element)}
    </>
  );
}
