import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function EducationTable() {
  return (
    <TableContainer component={Paper} sx={{
      background: 'transparent',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(122, 179, 226, 0.3)'
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="education table">
        <TableHead>
          <TableRow sx={{ background: 'rgba(122, 179, 226, 0.1)' }}>
            <TableCell sx={{ color: 'var(--primary)', fontWeight: 'bold' }}>Degree</TableCell>
            <TableCell sx={{ color: 'var(--primary)', fontWeight: 'bold' }} align="center">Institute</TableCell>
            <TableCell sx={{ color: 'var(--primary)', fontWeight: 'bold' }} align="center">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:nth-of-type(odd)': { background: 'rgba(255,255,255,0.05)' } }}>
            <TableCell component="th" scope="row" sx={{ color: 'var(--text)' }}>
              Bachelor's in IT
            </TableCell>
            {/* Other cells */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

// function EducationTable() {
//   const educationData = [
//     {
//       degree: "Bachelor's in Information Technology",
//       institute: 'Information Technology University, Lahore',
//       year: '2023 - Present',
//       grade: '---',
//     },
//     {
//       degree: 'Intermediate In Computer Science',
//       institute: 'Kips College',
//       year: '2020 - 2022',
//       grade: 'A+',
//     },
//     {
//       degree: 'Matriculation',
//       institute: 'Umar Grammar School',
//       year: '2018 - 2020',
//       grade: 'A+',
//     },
//   ]

//   return (
//     <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e2d', color: 'var(--text-color)' }}>
//       <Table sx={{ minWidth: 650 }} aria-label="education table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ color: 'var(--primary-color)', fontWeight: 600 }}>Degree</TableCell>
//             <TableCell sx={{ color: 'var(--primary-color)', fontWeight: 600 }} align="center">Institute</TableCell>
//             <TableCell sx={{ color: 'var(--primary-color)', fontWeight: 600 }} align="center">Year</TableCell>
//             <TableCell sx={{ color: 'var(--primary-color)', fontWeight: 600 }} align="center">Grade</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {educationData.map((row, index) => (
//             <TableRow
//               key={index}
//               sx={{
//                 '&:nth-of-type(odd)': {
//                   backgroundColor: 'rgba(122, 179, 226, 0.1)',
//                 },
//                 '&:last-child td, &:last-child th': { border: 0 },
//               }}
//             >
//               <TableCell component="th" scope="row" sx={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
//                 {row.degree}
//               </TableCell>
//               <TableCell align="center" sx={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
//                 {row.institute}
//               </TableCell>
//               <TableCell align="center" sx={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
//                 {row.year}
//               </TableCell>
//               <TableCell align="center" sx={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
//                 {row.grade}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default EducationTable