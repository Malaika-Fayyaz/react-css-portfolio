import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'var(--bg-color)',
        borderTop: '1px solid var(--primary-color)',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Malaika Fayyaz - Portfolio
      </Typography>
    </Box>
  )
}

export default Footer