
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';

const Profiles = () => {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=50');
                setUsers(response.data.results); 
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    if (users.length === 0) {
        return <Typography>Loading profiles...</Typography>;
    }

    return (
        <Box sx={{ margin: 2 }}>
            <Typography variant="h4" gutterBottom align="center">
                User Profiles
            </Typography>
            <Grid container spacing={3}>
                {users.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Avatar
                                    alt={`${user.name.first} ${user.name.last}`}
                                    src={user.picture.large}
                                    sx={{ width: 100, height: 100, margin: '0 auto' }}
                                />
                                <Typography variant="h6" sx={{ marginTop: 2 }}>
                                    {`${user.name.first} ${user.name.last}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.email}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.phone}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.location.country}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Profiles;
