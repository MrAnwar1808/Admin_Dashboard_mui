import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Divider, Grid } from '@mui/material';
import { Bar} from 'react-chartjs-2';
// import { Pie} from 'react-chartjs-2';

const Reports = () => {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=30');
                setReportData(response.data.results);
            } catch (error) {
                console.error('Error fetching report data:', error);
            }
        };
        fetchData();
    }, []);


    const countryData = reportData.reduce((acc, user) => {
        const country = user.location.country;
        acc[country] = (acc[country] || 0) + 1;
        return acc;
    }, {});

    // const genderData = reportData.reduce((acc, user) => {
    //     const gender = user.gender;
    //     acc[gender] = (acc[gender] || 0) + 1;
    //     return acc;
    // }, {});

    const barChartData = {
        labels: Object.keys(countryData),
        datasets: [
            {
                label: 'Users by Country',
                data: Object.values(countryData),
                backgroundColor: 'rgba(63, 81, 181, 0.8)',
                borderColor: 'rgba(63, 81, 181, 1)',
                borderWidth: 1,
            },
        ],
    };

    // const pieChartData = {
    //     labels: Object.keys(genderData),
    //     datasets: [
    //         {
    //             data: Object.values(genderData),
    //             backgroundColor: ['#3f51b5', '#f50057'],
    //             hoverBackgroundColor: ['#283593', '#c51162'],
    //         },
    //     ],
    // };

    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Reports & Insights
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Grid container spacing={4}>
             
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Users Distribution by Country
                        </Typography>
                        <Box sx={{ height: '300px' }}>
                            <Bar data={barChartData} options={{ responsive: true }} />
                        </Box>
                    </Grid>

            
                    {/* <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Gender Distribution
                        </Typography>
                        <Box sx={{ height: '300px' }}>
                            <Pie data={pieChartData} options={{ responsive: true }} />
                        </Box>
                    </Grid>*/}
                </Grid> 
            </CardContent>
        </Card>
    );
};

export default Reports;
