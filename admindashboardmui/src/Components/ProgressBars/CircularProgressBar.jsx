
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Box } from '@mui/material';

const CircularProgressBar = () => {
    const [activeUsers, setActiveUsers] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=50');
                const activeCount = response.data.results.filter(user => user.registered.age > 1).length;
                setActiveUsers(activeCount);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <Box sx={{ textAlign: 'center', margin: '20px auto' }}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Active Users
            </Typography>
            <CircularProgress variant="determinate" value={(activeUsers / 50) * 100} size={80} />
            <Typography variant="body2" sx={{ marginTop: 1 }}>
                {activeUsers} Active out of 50 Users
            </Typography>
        </Box>
    );
};

export default CircularProgressBar;
