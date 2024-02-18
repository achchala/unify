import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './logo.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 215,
  },
  listItemIcon: {
    marginRight: theme.spacing(1.5),
    color: '#9D9D9D',
  },
  topMargin: {
    marginTop: theme.spacing(2),
  },
  logo: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  accountIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={true}
    >
      <div className={classes.topMargin} />
      <List>
        {/* Logo linking to home */}
        <ListItem button component={Link} to="/">
          <img src={logo} alt="Logo" className={classes.logo} />
        </ListItem>
        {/* Request */}
        <ListItem button component={Link} to="/RequestBuddyPage">
          <BoltIcon className={classes.listItemIcon} />
          <ListItemText primary="Request" primaryTypographyProps={{ style: { color: '#9D9D9D' } }} />
        </ListItem>
        {/* Matches */}
        <ListItem button component={Link} to="/ViewMatches">
          <FavoriteIcon className={classes.listItemIcon} />
          <ListItemText primary="Matches" primaryTypographyProps={{ style: { color: '#9D9D9D' } }} />
        </ListItem>
      </List>
      {/* Account icon */}
      <div className={classes.accountIcon}>
        <AccountCircleIcon style={{ fontSize: '5rem' }} />
      </div>
    </Drawer>
    </BrowserRouter>
  );
}
