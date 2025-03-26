
import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Box, Typography, Snackbar, Alert, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper,} from '@mui/material';

const UserManagement = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        isActive: true,
        photo: null, 
    });
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedFormData = { ...formData };


        const fileInput = event.target.photo.files[0];
        if (fileInput) {
            updatedFormData.photo = URL.createObjectURL(fileInput); 
        }

        if (editIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = updatedFormData;
            setUsers(updatedUsers);
            setSnackbar({ open: true, message: 'User updated successfully!', severity: 'success' });
        } else {
            setUsers([...users, updatedFormData]);
            setSnackbar({ open: true, message: 'User added successfully!', severity: 'success' });
        }

        setFormData({ name: '', age: '', gender: '', email: '', isActive: true, photo: null });
        setEditIndex(null);
    };

    const handleEdit = (index) => {
        setFormData(users[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        setSnackbar({ open: true, message: 'User deleted successfully!', severity: 'info' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ open: false, message: '', severity: '' });
    };

    return (
        <Box sx={{ width: '70%', margin: '20px auto' }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                User Management
            </Typography>

            <Box sx={{ marginBottom: 4, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    {editIndex !== null ? 'Edit User' : 'Add User'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ marginBottom: 2 }}>
                        <label htmlFor="image-upload">Upload Picture:</label>
                        <input
                            id="image-upload"
                            name="photo"
                            type="file"
                            accept="image/*"
                            style={{ display: 'block', marginTop: '8px' }}
                        />
                    </Box>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControlLabel
                        control={<Switch checked={formData.isActive} onChange={handleChange} name="isActive" />}
                        label="Is Active"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                        {editIndex !== null ? 'Update User' : 'Add User'}
                    </Button>
                </form>
            </Box>

            {users.length > 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Picture</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Active</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {user.photo ? (
                                            <img
                                                src={user.photo}
                                                alt="User"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        ) : (
                                            'No Image'
                                        )}
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.isActive ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            onClick={() => handleEdit(index)}
                                            sx={{ marginRight: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default UserManagement;
