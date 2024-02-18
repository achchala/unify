import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { borderBottom } from '@mui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: 215,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemIcon: {
    marginRight: theme.spacing(1.5),
    color: '#9D9D9D',
  },
  topMargin: {
    marginTop: theme.spacing(7)
  },
  spaceBetween: {
    marginBottom: theme.spacing(1)
  },
  color: {
    color: '#9D9D9D',
  },
  accountIcon: {
    marginTop: 'auto',
    marginBottom: theme.spacing(2),
  }
}));


export default function Sidebar() {
  const classes = useStyles();
  const icons = [<BoltIcon />, <FavoriteIcon />]; // Define your icons here

  return (
  <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={true}
    >
      <div className={classes.toolbar} />
      <div className={classes.topMargin}/>
      <List>
        {['Request', 'Matches'].map((text, index) => (
          <ListItem button key={text} className={classes.spaceBetween}>
          {React.cloneElement(icons[index], { className: classes.listItemIcon })}
          <ListItemText primary={text} primaryTypographyProps={{ style: { color: '#9D9D9D' } }} />
          </ListItem>
        ))}
      </List>
      
      <div className={classes.accountIcon}>
        <AccountCircleIcon style={{ fontSize: '5rem' }} />
      </div>
    </Drawer>
  );
}
