import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { usePageTitle } from '../context/PageTitleContext'
import ContactForm from '../components/ContactForm'

function Contact() {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Contact')
  }, [setTitle])

  return (
    <Box className="section">
      <Typography variant="h2" className="section-title">
        Contact
      </Typography>
      <ContactForm />
    </Box>
  )
}

export default Contact