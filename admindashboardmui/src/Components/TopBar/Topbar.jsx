import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, AccountCircle, Home } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="Toolbar">
        <div className="left-section">
          <IconButton edge="start" className="menu-icon" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              color: "rgb(114, 29, 50)"
            }}
          >
            ARS
          </Typography>
        </div>
        <div className="right-section">
          <IconButton component={Link} to="/" color="inherit">
            <Home />
          </IconButton>
          <IconButton component={Link} to="/notification" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton component={Link} to="/settings" color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={Link} to="/profile">User Profiles</MenuItem>
            <MenuItem component={Link} to="/settings">Settings</MenuItem>
            <MenuItem component={Link} to="/logout">Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
