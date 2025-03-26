
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const rows = [
  { id: 1, name: 'Arun', gender: 'Male', physics: 88, maths: 87, english: 78 },
  { id: 2, name: 'Rajesh', gender: 'Male', physics: 96, maths: 100, english: 95 },
  { id: 3, name: 'Moorthy', gender: 'Male', physics: 89, maths: 90, english: 70 },
  { id: 4, name: 'Raja', gender: 'Male', physics: 30, maths: 25, english: 40 },
  { id: 5, name: 'Usha', gender: 'Female', physics: 67, maths: 45, english: 78 },
  { id: 6, name: 'Priya', gender: 'Female', physics: 56, maths: 46, english: 78 },
  { id: 7, name: 'Sundar', gender: 'Male', physics: 12, maths: 67, english: 67 },
  { id: 8, name: 'Kavitha', gender: 'Female', physics: 78, maths: 71, english: 67 },
  { id: 9, name: 'Dinesh', gender: 'Male', physics: 56, maths: 45, english: 67 },
  { id: 10, name: 'Hema', gender: 'Female', physics: 71, maths: 90, english: 23 },
  { id: 11, name: 'Gowri', gender: 'Female', physics: 100, maths: 100, english: 100 },
  { id: 12, name: 'Ram', gender: 'Male', physics: 78, maths: 55, english: 47 },
  { id: 13, name: 'Murugan', gender: 'Male', physics: 34, maths: 89, english: 78 },
  { id: 14, name: 'Jenifer', gender: 'Female', physics: 67, maths: 88, english: 90 },
];


const processStudents = (students) => {
  return students.map((student) => {
    const total = student.physics + student.maths + student.english;
    let grade = '';
    if (total >= 270) grade = 'A';
    else if (total >= 240) grade = 'B';
    else if (total >= 200) grade = 'C';
    else if (total >= 150) grade = 'D';
    else grade = 'F';
    return { ...student, total, grade };
  }).sort((a, b) => b.total - a.total); 
};

const UserTable = () => {

  const processedRows = processStudents(rows);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Physics</TableCell>
            <TableCell>Maths</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processedRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.physics}</TableCell>
              <TableCell>{row.maths}</TableCell>
              <TableCell>{row.english}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
