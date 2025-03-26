
import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #ffffff, #e03d3d)', // Fixed gradient property
                color: 'rgb(61, 7, 7)',
                width: '100%',
                padding: 4,
                marginTop: 'auto',
            }}
        >
            <Grid container spacing={2}>
         
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body2">
                        We are committed to delivering the best user experience through our platform.
                        Stay connected and let us help you achieve your goals.
                    </Typography>
                </Grid>

         
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <Link href="#profile" color="inherit" underline="hover">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="#settings" color="inherit" underline="hover">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link href="#reports" color="inherit" underline="hover">
                                Reports
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" color="inherit" underline="hover">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </Grid>

          
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton color="inherit" href="https://facebook.com" target="_blank">
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com" target="_blank">
                            <Twitter />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com" target="_blank">
                            <Instagram />
                        </IconButton>
                        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Your Company. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
