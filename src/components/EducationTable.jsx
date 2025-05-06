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


