
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography, TextField,
    TableSortLabel, Box, Button, Modal, TextField as MuiTextField,} from '@mui/material';



const DataTable = () => {
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [openModal, setOpenModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
  

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=50');
                setUserData(response.data.results);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleSort = () => {
        const isAscending = order === 'asc';
        setOrder(isAscending ? 'desc' : 'asc');
        setUserData((prevData) =>
            [...prevData].sort((a, b) => {
                if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return isAscending ? -1 : 1;
                if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return isAscending ? 1 : -1;
                return 0;
            })
        );
    };

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = (index) => {
        setUserData((prevData) => prevData.filter((_, i) => i !== index));
    };

    const handleOpenModal = (user = null) => {
        setEditingUser(user);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setEditingUser(null);
        setOpenModal(false);
    };

    const handleSaveUser = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const fileInput = formData.get('photo');
        let imageUrl = 'https://via.placeholder.com/50'; 

        if (fileInput && fileInput.size > 0) {
            imageUrl = URL.createObjectURL(fileInput); 
        }

        const newUser = {
            name: {
                first: formData.get('firstName'),
                last: formData.get('lastName'),
            },
            gender: formData.get('gender'),
            dob: { age: formData.get('age') },
            email: formData.get('email'),
            picture: { thumbnail: imageUrl },
        };

        if (editingUser) {
            setUserData((prevData) =>
                prevData.map((user) =>
                    user === editingUser ? { ...editingUser, ...newUser } : user
                )
            );
        } else {
            setUserData((prevData) => [...prevData, newUser]);
        }

        handleCloseModal();
    };

   
    

    const filteredData = userData.filter((user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Paper sx={{ width: '80%', margin: '20px auto', padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                User Data Table
            </Typography>

            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    label="Search by name"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    onClick={() => handleOpenModal()}
                >
                    Add New User
                </Button>
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Picture</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={order}
                                    onClick={handleSort}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <img src={user.picture.thumbnail} 
                                        alt="User"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }} />
                                    </TableCell>
                                    <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.dob.age}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button
                                            color="primary"
                                            onClick={() => handleOpenModal(user)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="secondary"
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

            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

          

            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 4,
                        width: 400,
                    }}
                >
                    <form onSubmit={handleSaveUser}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                            {editingUser ? 'Edit User' : 'Add New User'}
                        </Typography>

                        {/* Image Upload Field */}
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

                        <MuiTextField
                            name="firstName"
                            label="First Name"
                            defaultValue={editingUser?.name.first || ''}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <MuiTextField
                            name="lastName"
                            label="Last Name"
                            defaultValue={editingUser?.name.last || ''}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <MuiTextField
                            name="gender"
                            label="Gender"
                            defaultValue={editingUser?.gender || ''}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <MuiTextField
                            name="age"
                            label="Age"
                            defaultValue={editingUser?.dob.age || ''}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <MuiTextField
                            name="email"
                            label="Email"
                            defaultValue={editingUser?.email || ''}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Save
                        </Button>
                    </form>
                </Paper>
            </Modal>
        </Paper>
    );
};

export default DataTable;
