
import React from 'react';
import DataTable from '../Components/DataTable/DataTable';
import UserTable from './UsersTable';
import UserManagement from '../Components/UserForm/UserForm';


const Users = () => {
    
    return (
      <div>
        <UserManagement />
        <DataTable/>
        <UserTable />
      </div>
    )
}

export default Users;
