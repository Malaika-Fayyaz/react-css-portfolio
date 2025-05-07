import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import { useMediaQuery, Box } from '@mui/material';
import { PageTitleProvider } from '../context/PageTitleContext';
import { useDrawerState } from './SideNav'; 

function Layout() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const { drawerOpen } = useDrawerState(); 

  const drawerWidth = 250;

  return (
    <PageTitleProvider>
      <Box
        sx={{
          background: '#F5F5F5',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 50% 50%, 
              rgba(122, 179, 226, 0.08) 0%, 
              transparent 70%)`,
            zIndex: -1,
          },
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <SideNav />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              transition: 'margin-left 0.3s ease',
              marginLeft: isMobile ? 0 : drawerOpen ? `${drawerWidth}px` : 0,
            }}
          >
            <Header />

            {/* Page Content */}
            <Box
              sx={{
                flex: 1,
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Outlet />
            </Box>

            <Footer />
          </Box>
        </Box>
      </Box>
    </PageTitleProvider>
  );
}

export default Layout;
