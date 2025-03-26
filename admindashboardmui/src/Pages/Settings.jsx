import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, TextField, Button, Switch, FormControlLabel, Divider } from '@mui/material';

// Tab Panel Component
const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Settings = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Divider />
      <Tabs value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        <Tab label="General Settings" />
        <Tab label="Profile Settings" />
        <Tab label="Dashboard Settings" />
        <Tab label="Display Settings" />
        <Tab label="About" />
        <Tab label="Feedback" />
        <Tab label="Other Settings" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={tabIndex} index={0}>
        <Typography variant="h6">General Settings</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable Notifications"
        />
        <FormControlLabel
          control={<Switch />}
          label="Auto-Save Changes"
        />
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <Typography variant="h6">Profile Settings</Typography>
        <TextField
          label="Username"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email Address"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Phone Number"
          fullWidth
          variant="outlined"
        />
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <Typography variant="h6">Dashboard Settings</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable Real-Time Updates"
        />
        <FormControlLabel
          control={<Switch />}
          label="Show Analytics Widgets"
        />
      </TabPanel>

      <TabPanel value={tabIndex} index={3}>
        <Typography variant="h6">Display Settings</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable Dark Mode"
        />
        <FormControlLabel
          control={<Switch />}
          label="Compact View"
        />
        <FormControlLabel
          control={<Switch />}
          label="High Contrast Mode"
        />
      </TabPanel>

      <TabPanel value={tabIndex} index={4}>
        <Typography variant="h6">About</Typography>
        <Typography>
          This application was designed to provide a seamless user experience for managing your data.
          Version: 1.0.0
        </Typography>
      </TabPanel>

      <TabPanel value={tabIndex} index={5}>
        <Typography variant="h6">Feedback</Typography>
        <TextField
          label="Your Feedback"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary">
          Submit Feedback
        </Button>
      </TabPanel>

      <TabPanel value={tabIndex} index={6}>
        <Typography variant="h6">Other Settings</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Enable Beta Features"
        />
        <FormControlLabel
          control={<Switch />}
          label="Allow Data Collection for Analytics"
        />
      </TabPanel>
    </Box>
  );
};

export default Settings;
