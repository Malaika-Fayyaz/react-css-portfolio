import { Box } from '@mui/material'
import Header from './Header'
import SideNav from './SideNav'
import Footer from './Footer'
import { useMediaQuery } from '@mui/material'
import { PageTitleProvider } from '../context/PageTitleContext'

function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <PageTitleProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {!isMobile && <SideNav />}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: !isMobile ? '250px' : 0,
            transition: 'margin 0.3s ease',
          }}
        >
          <Header />
          {children}
          <Footer />
        </Box>
      </Box>
    </PageTitleProvider>
  )
}

export default Layout