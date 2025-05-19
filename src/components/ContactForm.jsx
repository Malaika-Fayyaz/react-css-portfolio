import { Button, TextField, Box, Typography } from '@mui/material';

export default function ContactForm() {
  return (
    <Box component="form" sx={{
      maxWidth: '800px',
      padding: '2rem',
      background: 'var(--card-bg)',
      borderRadius: '12px',
      border: '1px solid rgba(122, 179, 226, 0.3)'
    }}>
      <Typography variant="h4" gutterBottom color="var(--primary)">
        Get In Touch
      </Typography>
      
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'var(--primary)' },
            '&:hover fieldset': { borderColor: 'var(--accent)' }
          }
        }}
      />
            
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: '1rem',
          background: 'var(--primary)',
          '&:hover': { background: 'var(--accent)' }
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}

