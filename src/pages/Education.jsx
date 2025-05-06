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
} from '@mui/material'
import { useEffect } from 'react'
import { usePageTitle } from '../context/PageTitleContext'

function Education() {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Education')
  }, [setTitle])

  const educationData = [
    {
      degree: "Bachelors of Computer Science",
      institute: "Information Technology University Of the Punjab",
      link: "https://itu.edu.pk",
      year: "2027",
    },
    {
      degree: "Intermediate In Computer Science",
      institute: "Kips College",
      link: "https://kipscolleges.com/",
      year: "2022",
    },
    {
      degree: "Matriculation In Science",
      institute: "Umar Grammar School",
      year: "2020",
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)', 
        padding: 3,
        boxSizing: 'border-box',
        marginLeft: '-250px'
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 800,
          width: '100%',
          backgroundColor: '#444',
          border: '1px solid #7ab3e2',
          '& .MuiTableCell-root': {
            borderBottom: '1px solid #7ab3e2'
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#555' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Degree</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Institute</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educationData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: '#fff' }}>{row.degree}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{row.institute}</TableCell>
                {/* <Link 
                    href={row.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#fff', // Changed to blue for better visibility
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                      display: 'block', // Ensures proper alignment
                      width: '100%' // Takes full cell width
                    }}
                  >
                    {row.institute || '-'}
                  </Link> */}
                <TableCell sx={{ color: '#fff' }}>{row.year || '-'}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Education