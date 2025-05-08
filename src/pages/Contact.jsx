import { Box, TextField, Button, Typography, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import { usePageTitle } from '../context/PageTitleContext';
import { useEffect, useState } from 'react';
import { useDrawerState } from '../components/SideNav';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

function ContactForm() {
  const { setTitle } = usePageTitle();
  const isMobile = useMediaQuery('(max-width:768px)');
  const { drawerOpen } = useDrawerState(); 

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert('Message sent successfully!');
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ 
      // maxWidth: drawerOpen && !isMobile ? 'calc(100% - 250px)' : '100%',
      transition: 'max-width 0.3s ease'
    }}>
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 700,
        width: '100%',
        marginTop: isMobile ? '50px' : '60px',
        marginLeft: isMobile ? '0' : drawerOpen? '-100px': '5%',
        padding: isMobile ? '15px' : '20px',
        border: '2px solid var(--primary-color)',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Name Field */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
          Name
        </Typography>
        <TextField
          fullWidth
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--primary-color)',
                borderRadius: '90px',
              },
              '&:hover fieldset': {
                borderColor: 'var(--primary-color)',
              },
            },
            '& .MuiInputBase-input': {
              padding: isMobile ? '12px 16px' : '14px 16px',
            }
          }}
        />
      </Box>

      {/* Email Field */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
          Email
        </Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--primary-color)',
                borderRadius: '90px',
              },
              '&:hover fieldset': {
                borderColor: 'var(--primary-color)',
              },
            },
            '& .MuiInputBase-input': {
              padding: isMobile ? '12px 16px' : '14px 16px',
            }
          }}
        />
      </Box>

      {/* Message Field */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
          Message
        </Typography>
        <TextField
          fullWidth
          id="message"
          name="message"
          placeholder="Write your message here"
          multiline
          rows={isMobile ? 3 : 4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--primary-color)',
                borderRadius: '15px',
              },
              '&:hover fieldset': {
                borderColor: 'var(--primary-color)',
              },
            },
          }}
        />
      </Box>

      {/* Submit Button - Now with perfect positioning */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: isMobile ? 'center' : 'flex-end',
        width: '100%',
        mt: 3
      }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--bg-color)',
            fontWeight: 800,
            padding: isMobile ? '10px 24px' : '12px 32px',
            fontSize: isMobile ? '0.9rem' : '1rem',
            minWidth: isMobile ? '100%' : '120px',
            '&:hover': {
              backgroundColor: '#7ab3e2',
              transform: isMobile ? 'none' : 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
    </Box>
  );
}

export default ContactForm;

