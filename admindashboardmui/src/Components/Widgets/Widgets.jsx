
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios';

const Widgets = () => {
    const [userCount, setUserCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=100');
                setUserCount(response.data.results.length);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <Card sx={{ minWidth: 250, backgroundColor: '#f5f5f5', marginBottom: 2 }}>
            <CardContent>
                <PeopleIcon sx={{ fontSize: 40, color: '#3f51b5' }} />
                <Typography variant="h6">Total Users</Typography>
                {loading ? <CircularProgress /> : <Typography variant="h4">{userCount}</Typography>}
                <Typography color="text.secondary">Active: {Math.round(userCount * 0.8)}</Typography>
            </CardContent>
        </Card>
    );
};

export default Widgets;
