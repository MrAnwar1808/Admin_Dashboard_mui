
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import TopBar from '../Components/TopBar/Topbar';
import Widgets from '../Components/Widgets/Widgets';
import Charts from '../Components/Charts/Charts';
import { Box, Grid } from '@mui/material';
import CircularProgressBar from '../Components/ProgressBars/CircularProgressBar';
import LinearProgressBar from '../Components/ProgressBars/LinearProgressBar';
import DataTable from '../Components/DataTable/DataTable';
import UserForm from '../Components/UserForm/UserForm';
import Footer from '../Components/Footer/Footer';


const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar}/>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <TopBar toggleSidebar={toggleSidebar} />

                <Grid container spacing={2} sx={{ marginTop: '100px' }}>
                    <Grid item xs={12} md={4}>
                        <Widgets />
                    </Grid>
                    <Grid item xs={12}>
                        <Charts />
                    </Grid>

                    
                </Grid>

                <Box>
                    <LinearProgressBar />
                    <CircularProgressBar />
                </Box>

                <Box>
                    <DataTable />
                </Box>

                <Box>
                    <UserForm />
                </Box>

                <Footer/>
            </Box>
        </Box>
    );
};

export default Dashboard;
