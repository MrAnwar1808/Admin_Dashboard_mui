
import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert, List, ListItem, ListItemAvatar, ListItemText, Avatar,} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'System Update',
      description: 'A new system update is available. Please update to version 1.2.0.',
      avatar: <NotificationsIcon color="primary" />,
    },
    {
      id: 2,
      type: 'success',
      title: 'Profile Updated',
      description: 'Your profile information was successfully updated.',
      avatar: <Avatar sx={{ bgcolor: 'green' }}>P</Avatar>,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Password Expiring',
      description: 'Your password will expire in 3 days. Update it now to avoid issues.',
      avatar: <Avatar sx={{ bgcolor: 'orange' }}>W</Avatar>,
    },
    {
      id: 4,
      type: 'error',
      title: 'Payment Failed',
      description: 'Your recent payment transaction could not be processed. Try again.',
      avatar: <Avatar sx={{ bgcolor: 'red' }}>E</Avatar>,
    },
  ]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleNotificationClick = (notification) => {
    setSnackbar({
      open: true,
      message: `${notification.title}: ${notification.description}`,
      severity: notification.type,
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'info' });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            button
            onClick={() => handleNotificationClick(notification)}
            sx={{
              marginBottom: 2,
              padding: 2,
              border: '1px solid #ddd',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <ListItemAvatar>{notification.avatar}</ListItemAvatar>
            <ListItemText
              primary={notification.title}
              secondary={notification.description}
            />
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Notification;
