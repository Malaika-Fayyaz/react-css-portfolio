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
  useMediaQuery
} from '@mui/material';
import School from '@mui/icons-material/School';
import LinkIcon from '@mui/icons-material/Link';
import { usePageTitle } from '../context/PageTitleContext';
import { useEffect } from 'react';

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
      status: "Ongoing",
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
        padding: 2,
        borderRadius: '16px',
        marginTop: '10%',
        marginLeft: isMobile? '-46%' : '-30%'

      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: '100%',
          maxHeight: '80%',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          background: ' #6D7B8D',
          border: '2px solid rgba(253, 253, 253, 0.3)',
        }}
      >
        <Table sx={{ minWidth650 }} aria-label="education timeline">
          <TableHead>
            <TableRow sx={{ 
              background: ' #2C3E50',
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
                  '&:hover': {
                    backgroundColor: 'rgba(33, 150, 243, 0.05)',
                  },
                  '&:last-child td': { borderBottom: 0 }
                }}
              >
                <TableCell sx={{ width: '25%', py: 3 }}>
                  <Typography variant="subtitle1">
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
                          background: ' #2C3E50',
                          color: '#fff'
                        }}
                      />
                    ))}
                  </Box>
                </TableCell>
                
                <TableCell sx={{ width: '30%', py: 3 , color: '#000'}}>
                  {row.link ? (
                    <Link
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#fff',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <LinkIcon fontSize="small" sx={{ mr: 1 }} />
                      {row.institute}
                    </Link>
                  ) : (
                    <Typography>{row.institute}</Typography>
                  )}
                </TableCell>
                
                <TableCell sx={{ width: '10%', py: 3 }}>
                  <Typography variant="body1" color="text.secondary">
                    {row.year}
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: '10%', py: 3 }}>
                  <Chip 
                    label={row.status} 
                    color= ' #2C3E50'
                    size="small"
                    sx={{ 
                      fontWeight: 500,
                      borderRadius: '4px'
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Education;


