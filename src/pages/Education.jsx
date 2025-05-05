import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { usePageTitle } from '../context/PageTitleContext'
import EducationTable from '../components/EducationTable'

function Education() {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Education')
  }, [setTitle])

  return (
    <Box className="section">
      <Typography variant="h2" className="section-title">
        Education
      </Typography>
      <EducationTable />
    </Box>
  )
}

export default Education