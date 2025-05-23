import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: 'var(--bg-color)',
        borderTop: '1px solid var(--primary-color)',
        textAlign: 'right',
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} Malaika Fayyaz - All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
