
import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Charts = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=50');
                setUserData(response.data.results);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const ageGroups = userData.reduce((acc, user) => {
        const age = user.dob.age;
        if (age < 20) acc[0]++;
        else if (age < 30) acc[1]++;
        else if (age < 40) acc[2]++;
        else acc[3]++;
        return acc;
    }, [0, 0, 0, 0]);

    const chartData = {
        labels: ['<20', '20-29', '30-39', '40+'],
        datasets: [
            {
                label: 'User Age Distribution',
                data: ageGroups,
                backgroundColor: ['#3f51b5', '#2196f3', '#f50057', '#4caf50']
            }
        ]
    };

    const chartStyles = { width: '100%', height: '250px' }; 

    return (
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: '#f5f5f5', padding: 2, height: 300 }}>
                    <CardContent>
                        <Typography variant="h6">Bar Chart</Typography>
                        <div style={chartStyles}>
                            <Bar data={chartData} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>

            
            <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: '#f5f5f5', padding: 2, height: 300 }}>
                    <CardContent>
                        <Typography variant="h6">Pie Chart</Typography>
                        <div style={chartStyles}>
                            <Pie data={chartData} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>

    
            <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: '#f5f5f5', padding: 2, height: 300 }}>
                    <CardContent>
                        <Typography variant="h6">Line Chart</Typography>
                        <div style={chartStyles}>
                            <Line data={chartData} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Charts;
