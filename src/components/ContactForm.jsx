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
      
      {/* Add similar styling for email and message fields */}
      
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



// import { Box, TextField, Button, Typography } from '@mui/material'
// import { useFormik } from 'formik'
// import * as yup from 'yup'

// const validationSchema = yup.object({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Enter a valid email').required('Email is required'),
//   message: yup.string().required('Message is required'),
// })

// function ContactForm() {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log('Form submitted:', values)
//       alert('Message sent successfully!')
//       formik.resetForm()
//     },
//   })

//   return (
//     <Box
//       component="form"
//       onSubmit={formik.handleSubmit}
//       sx={{
//         maxWidth: 1000,
//         margin: 'auto',
//         padding: '20px',
//         border: '2px solid var(--primary-color)',
//         borderRadius: '15px',
//       }}
//     >
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
//           Name
//         </Typography>
//         <TextField
//           fullWidth
//           id="name"
//           name="name"
//           placeholder="Enter your name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: 'var(--primary-color)',
//                 borderRadius: '90px',
//               },
//               '&:hover fieldset': {
//                 borderColor: 'var(--primary-color)',
//               },
//             },
//             backgroundColor: 'rgba(122, 179, 226, 0.1)',
//           }}
//         />
//       </Box>
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
//           Email
//         </Typography>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: 'var(--primary-color)',
//                 borderRadius: '90px',
//               },
//               '&:hover fieldset': {
//                 borderColor: 'var(--primary-color)',
//               },
//             },
//             backgroundColor: 'rgba(122, 179, 226, 0.1)',
//           }}
//         />
//       </Box>
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600, mb: 1 }}>
//           Message
//         </Typography>
//         <TextField
//           fullWidth
//           id="message"
//           name="message"
//           placeholder="Write your message here"
//           multiline
//           rows={4}
//           value={formik.values.message}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.message && Boolean(formik.errors.message)}
//           helperText={formik.touched.message && formik.errors.message}
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: 'var(--primary-color)',
//                 borderRadius: '15px',
//               },
//               '&:hover fieldset': {
//                 borderColor: 'var(--primary-color)',
//               },
//             },
//             backgroundColor: 'rgba(122, 179, 226, 0.1)',
//           }}
//         />
//       </Box>
//       <Button
//         type="submit"
//         variant="contained"
//         sx={{
//           backgroundColor: 'var(--primary-color)',
//           color: 'var(--bg-color)',
//           fontWeight: 800,
//           '&:hover': {
//             backgroundColor: '#f9f9fa',
//             transform: 'scale(1.1)',
//           },
//           transition: 'background-color 0.3s ease, transform 0.3s ease',
//           float: 'right',
//         }}
//       >
//         Submit
//       </Button>
//     </Box>
//   )
// }

// export default ContactForm