import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer open={open} onClose={toggleSidebar}      sx={{
        '& .MuiDrawer-paper': {
            width: 250,
            marginTop: '100px',
            boxSizing: 'border-box',
            background: 'linear-gradient(to right, #ffffff, #e03d3d) !important',
            color: 'white',
        },
    }}>
      <List >
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} >
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
