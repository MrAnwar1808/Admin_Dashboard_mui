
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LinearProgress, Typography, Box } from '@mui/material';

const LinearProgressBar = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingProgress(20);
                await axios.get('https://randomuser.me/api/?results=50');
                setLoadingProgress(100);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ width: '80%', margin: '20px auto' }}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Data Loading Progress
            </Typography>
            <LinearProgress variant="determinate" value={loadingProgress} />
            <Typography variant="body2" sx={{ marginTop: 1 }}>
                {loadingProgress}% Loaded
            </Typography>
        </Box>
    );
};

export default LinearProgressBar;
