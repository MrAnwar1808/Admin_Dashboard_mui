// import React from "react";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

// // Inline student data
// const studentData = [
//     { id: 1, name: "arun", gender: "Male", physics: 88, maths: 87, english: 78 },
//     { id: 2, name: "rajesh", gender: "Male", physics: 96, maths: 100, english: 95 },
//     { id: 3, name: "moorthy", gender: "Male", physics: 89, maths: 90, english: 70 },
//     { id: 4, name: "raja", gender: "Male", physics: 30, maths: 25, english: 40 },
//     { id: 5, name: "usha", gender: "Female", physics: 67, maths: 45, english: 78 },
//     { id: 6, name: "priya", gender: "Female", physics: 56, maths: 46, english: 78 },
//     { id: 7, name: "Sundar", gender: "Male", physics: 12, maths: 67, english: 67 },
//     { id: 8, name: "Kavitha", gender: "Female", physics: 78, maths: 71, english: 67 },
//     { id: 9, name: "Dinesh", gender: "Male", physics: 56, maths: 45, english: 67 },
//     { id: 10, name: "Hema", gender: "Female", physics: 71, maths: 90, english: 23 },
//     { id: 11, name: "Gowri", gender: "Female", physics: 100, maths: 100, english: 100 },
//     { id: 12, name: "Ram", gender: "Male", physics: 78, maths: 55, english: 47 },
//     { id: 13, name: "Murugan", gender: "Male", physics: 34, maths: 89, english: 78 },
//     { id: 14, name: "Jenifer", gender: "Female", physics: 67, maths: 88, english: 90 },
// ];

// // Register Chart.js components
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     ArcElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     ArcElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const DataChart = () => {
//     // Subjects for the charts
//     const subjects = ["physics", "maths", "english"];

//     // Calculate average marks for each subject
//     const subjectAverages = subjects.map((subject) => {
//         const total = studentData.reduce((acc, student) => acc + (student[subject] || 0), 0);
//         return (total / studentData.length).toFixed(2);
//     });

//     // Data for the bar and line charts (subject averages)
//     const subjectChartData = {
//         labels: subjects,
//         datasets: [
//             {
//                 label: "Average Marks by Subject",
//                 data: subjectAverages,
//                 backgroundColor: ["#3f51b5", "#2196f3", "#f50057"],
//             },
//         ],
//     };

//     // Data for the pie chart (individual English scores)
//     const pieChartData = {
//         labels: studentData.map((student) => student.name), // Use student names
//         datasets: [
//             {
//                 label: "English Scores",
//                 data: studentData.map((student) => student.english),
//                 backgroundColor: [
//                     "#3f51b5",
//                     "#2196f3",
//                     "#f50057",
//                     "#4caf50",
//                     "#ff9800",
//                     "#9c27b0",
//                     "#ffc107",
//                     "#8bc34a",
//                     "#00bcd4",
//                     "#e91e63",
//                 ],
//             },
//         ],
//     };

//     const chartStyles = { width: "100%", height: "250px" }; // Uniform chart size

//     return (
//         <Grid container spacing={2}>
//             {/* Bar Chart */}
//             <Grid item xs={12} md={4}>
//                 <Card sx={{ backgroundColor: "#f5f5f5", padding: 2, height: 300 }}>
//                     <CardContent>
//                         <Typography variant="h6">Bar Chart - Average Marks</Typography>
//                         <div style={chartStyles}>
//                             <Bar data={subjectChartData} />
//                         </div>
//                     </CardContent>
//                 </Card>
//             </Grid>

//             {/* Pie Chart */}
//             <Grid item xs={12} md={4}>
//                 <Card sx={{ backgroundColor: "#f5f5f5", padding: 2, height: 300 }}>
//                     <CardContent>
//                         <Typography variant="h6">Pie Chart - English Scores</Typography>
//                         <div style={chartStyles}>
//                             <Pie data={pieChartData} />
//                         </div>
//                     </CardContent>
//                 </Card>
//             </Grid>

//             {/* Line Chart */}
//             <Grid item xs={12} md={4}>
//                 <Card sx={{ backgroundColor: "#f5f5f5", padding: 2, height: 300 }}>
//                     <CardContent>
//                         <Typography variant="h6">Line Chart - Average Marks</Typography>
//                         <div style={chartStyles}>
//                             <Line data={subjectChartData} />
//                         </div>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         </Grid>
//     );
// };

// export default DataChart;
