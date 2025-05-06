import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Typography,
  Chip,
  useMediaQuery,
  styled
} from '@mui/material';
import School from '@mui/icons-material/School';
import LinkIcon from '@mui/icons-material/Link';
import { usePageTitle } from '../context/PageTitleContext';
import { useEffect } from 'react';

const ResponsiveTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    width: '100% !important',
    borderBottom: 'none',
    padding: '8px 16px',
    '&:before': {
      content: 'attr(data-label)',
      fontWeight: 600,
      width: '120px',
      minWidth: '120px',
      display: 'inline-block',
      color: theme.palette.text.secondary
    }
  }
}));

function Education() {
  const { setTitle } = usePageTitle();
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institute: "Information Technology University of the Punjab",
      link: "https://itu.edu.pk",
      year: "2027",
      status: " On Going ",
      highlights: ["CGPA: 3.06/4.0"]
    },
    {
      degree: "Intermediate in Computer Science",
      institute: "Kips College",
      link: "https://kipscolleges.com/",
      year: "2022",
      status: "Completed",
      highlights: ["Grade: A+"]
    },
    {
      degree: "Matriculation in Science",
      institute: "Umar Grammar School",
      year: "2020",
      status: "Completed",
      highlights: ["Grade: A+"]
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F5F5F5',
        padding: isMobile ? 1 : 2,
        borderRadius: '16px',
        marginTop: isMobile ? '20%' : '10%',
        marginLeft: isMobile ? '0' : '-30%',
        width: isMobile ? '100%' : 'auto'
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: '100%',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          background: 'transparent',
          border: 'none'
        }}
      >
        {isMobile ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {educationData.map((row, index) => (
              <Paper 
                key={index} 
                sx={{ 
                  p: 2, 
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  borderLeft: '4px solid #2C3E50'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#2C3E50' }}>
                  <School sx={{ verticalAlign: 'middle', mr: 1 }} />
                  {row.degree}
                </Typography>
                
                <Box sx={{ mb: 1 }}>
                  {row.highlights.map((item, i) => (
                    <Chip 
                      key={i}
                      label={item}
                      size="small"
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        background: '#2C3E50',
                        color: '#fff'
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LinkIcon fontSize="small" sx={{ mr: 1, color: '#2C3E50' }} />
                  {row.link ? (
                    <Link
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#2C3E50',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {row.institute}
                    </Link>
                  ) : (
                    <Typography color="#2C3E50">{row.institute}</Typography>
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="body2" color="#2C3E50">Year: {row.year}</Typography>
                  <Chip 
                    label={row.status} 
                    sx={{ 
                      background: row.status === 'Completed' ? '#4CAF50' : '#2196F3',
                      color: '#fff',
                      fontWeight: 500,
                      borderRadius: '4px'
                    }}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="education timeline">
            <TableHead>
              <TableRow sx={{ 
                background: '#2C3E50',
                '& th': {
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '16px 24px',
                }
              }}>
                <TableCell><School sx={{ verticalAlign: 'middle', mr: 1 }} /> Degree</TableCell>
                <TableCell>Institute</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationData.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(44, 62, 80, 0.05)',
                    },
                    '&:last-child td': { borderBottom: 0 }
                  }}
                >
                  <ResponsiveTableCell data-label="Degree" sx={{ width: '25%', py: 3 }}>
                    <Typography variant="subtitle1" color="#2C3E50">
                      {row.degree}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {row.highlights.map((item, i) => (
                        <Chip 
                          key={i}
                          label={item}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            background: '#2C3E50',
                            color: '#fff'
                          }}
                        />
                      ))}
                    </Box>
                  </ResponsiveTableCell>
                  
                  <ResponsiveTableCell data-label="Institute" sx={{ width: '30%', py: 3 }}>
                    {row.link ? (
                      <Link
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#2C3E50',
                          fontWeight: 500,
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        <LinkIcon fontSize="small" sx={{ mr: 1 }} />
                        {row.institute}
                      </Link>
                    ) : (
                      <Typography color="#2C3E50">{row.institute}</Typography>
                    )}
                  </ResponsiveTableCell>
                  
                  <ResponsiveTableCell data-label="Year" sx={{ width: '10%', py: 3 }}>
                    <Typography variant="body1" color="#2C3E50">
                      {row.year}
                    </Typography>
                  </ResponsiveTableCell>
                  
                  <ResponsiveTableCell data-label="Status" sx={{ width: '10%', py: 3 }}>
                    <Chip 
                      label={row.status} 
                      sx={{ 
                        background: row.status === 'Completed' ? '#4CAF50' : '#2196F3',
                        color: '#fff',
                        fontWeight: 500,
                        borderRadius: '4px'
                      }}
                    />
                  </ResponsiveTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
}

export default Education;








// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Link,
//   Typography,
//   Chip,
//   useMediaQuery,
//   styled
// } from '@mui/material';
// import School from '@mui/icons-material/School';
// import LinkIcon from '@mui/icons-material/Link';
// import { usePageTitle } from '../context/PageTitleContext';
// import { useEffect } from 'react';

// // Styled component for responsive cells
// const ResponsiveTableCell = styled(TableCell)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     display: 'flex',
//     width: '100% !important',
//     borderBottom: 'none',
//     padding: '8px 16px',
//     '&:before': {
//       content: 'attr(data-label)',
//       fontWeight: 600,
//       width: '120px',
//       minWidth: '120px',
//       display: 'inline-block',
//       color: theme.palette.text.secondary
//     }
//   }
// }));

// function Education() {
//   const { setTitle } = usePageTitle();
//   const isMobile = useMediaQuery('(max-width:768px)');

//   useEffect(() => {
//     setTitle('Education');
//   }, [setTitle]);

//   const educationData = [
//     {
//       degree: "Bachelor of Computer Science",
//       institute: "Information Technology University of the Punjab",
//       link: "https://itu.edu.pk",
//       year: "2027",
//       status: "Ongoing",
//       highlights: ["CGPA: 3.06/4.0"]
//     },
//     {
//       degree: "Intermediate in Computer Science",
//       institute: "Kips College",
//       link: "https://kipscolleges.com/",
//       year: "2022",
//       status: "Completed",
//       highlights: ["Grade: A+"]
//     },
//     {
//       degree: "Matriculation in Science",
//       institute: "Umar Grammar School",
//       year: "2020",
//       status: "Completed",
//       highlights: ["Grade: A+"]
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: '#F5F5F5',
//         padding: isMobile ? 1 : 2,
//         borderRadius: '16px',
//         marginTop: isMobile ? '20%' : '10%',
//         marginLeft: isMobile ? '0' : '-30%',
//         width: isMobile ? '100%' : 'auto'
//       }}
//     >
//       <TableContainer
//         component={Paper}
//         sx={{
//           maxWidth: '100%',
//           width: '100%',
//           borderRadius: '16px',
//           boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//           overflow: 'hidden',
//           background: '#6D7B8D',
//           border: '2px solid rgba(253, 253, 253, 0.3)',
//         }}
//       >
//         {isMobile ? (
//           <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
//             {educationData.map((row, index) => (
//               <Paper key={index} sx={{ mb: 2, p: 2, background: 'rgba(255, 255, 255, 0.9)' }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
//                   <School sx={{ verticalAlign: 'middle', mr: 1 }} />
//                   {row.degree}
//                 </Typography>
                
//                 <Box sx={{ mb: 1 }}>
//                   {row.highlights.map((item, i) => (
//                     <Chip 
//                       key={i}
//                       label={item}
//                       size="small"
//                       sx={{ 
//                         mr: 1, 
//                         mb: 1,
//                         background: '#2C3E50',
//                         color: '#fff'
//                       }}
//                     />
//                   ))}
//                 </Box>
                
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                   <LinkIcon fontSize="small" sx={{ mr: 1, color: '#2C3E50' }} />
//                   {row.link ? (
//                     <Link
//                       href={row.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         color: '#2C3E50',
//                         fontWeight: 500,
//                         textDecoration: 'none',
//                         '&:hover': {
//                           textDecoration: 'underline',
//                         },
//                       }}
//                     >
//                       {row.institute}
//                     </Link>
//                   ) : (
//                     <Typography>{row.institute}</Typography>
//                   )}
//                 </Box>
                
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//                   <Typography variant="body2">Year: {row.year}</Typography>
//                   <Chip 
//                     label={row.status} 
//                     sx={{ 
//                       background: '#2C3E50',
//                       color: '#fff',
//                       fontWeight: 500,
//                       borderRadius: '4px'
//                     }}
//                   />
//                 </Box>
//               </Paper>
//             ))}
//           </Box>
//         ) : (
//           <Table sx={{ minWidth: 650 }} aria-label="education timeline">
//             <TableHead>
//               <TableRow sx={{ 
//                 background: '#2C3E50',
//                 '& th': {
//                   color: '#fff',
//                   fontSize: '1rem',
//                   fontWeight: 600,
//                   padding: '16px 24px',
//                 }
//               }}>
//                 <TableCell><School sx={{ verticalAlign: 'middle', mr: 1 }} /> Degree</TableCell>
//                 <TableCell>Institute</TableCell>
//                 <TableCell>Year</TableCell>
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {educationData.map((row, index) => (
//                 <TableRow 
//                   key={index}
//                   sx={{ 
//                     '&:hover': {
//                       backgroundColor: 'rgba(33, 150, 243, 0.05)',
//                     },
//                     '&:last-child td': { borderBottom: 0 }
//                   }}
//                 >
//                   <ResponsiveTableCell data-label="Degree" sx={{ width: '25%', py: 3 }}>
//                     <Typography variant="subtitle1">
//                       {row.degree}
//                     </Typography>
//                     <Box sx={{ mt: 1 }}>
//                       {row.highlights.map((item, i) => (
//                         <Chip 
//                           key={i}
//                           label={item}
//                           size="small"
//                           sx={{ 
//                             mr: 1, 
//                             mb: 1,
//                             background: '#2C3E50',
//                             color: '#fff'
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </ResponsiveTableCell>
                  
//                   <ResponsiveTableCell data-label="Institute" sx={{ width: '30%', py: 3, color: '#000' }}>
//                     {row.link ? (
//                       <Link
//                         href={row.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           color: '#000',
//                           fontWeight: 500,
//                           textDecoration: 'none',
//                           '&:hover': {
//                             color: '#fff',
//                             textDecoration: 'underline',
//                           },
//                         }}
//                       >
//                         <LinkIcon fontSize="small" sx={{ mr: 1 }} />
//                         {row.institute}
//                       </Link>
//                     ) : (
//                       <Typography>{row.institute}</Typography>
//                     )}
//                   </ResponsiveTableCell>
                  
//                   <ResponsiveTableCell data-label="Year" sx={{ width: '10%', py: 3 }}>
//                     <Typography variant="body1" color="text.secondary">
//                       {row.year}
//                     </Typography>
//                   </ResponsiveTableCell>
                  
//                   <ResponsiveTableCell data-label="Status" sx={{ width: '10%', py: 3 }}>
//                     <Chip 
//                       label={row.status} 
//                       sx={{ 
//                         background: '#2C3E50',
//                         color: '#fff',
//                         fontWeight: 500,
//                         borderRadius: '4px'
//                       }}
//                     />
//                   </ResponsiveTableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </TableContainer>
//     </Box>
//   );
// }

// export default Education;




