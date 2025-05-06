import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import { useMediaQuery, Box } from '@mui/material';
import { PageTitleProvider } from '../context/PageTitleContext';

function Layout() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <PageTitleProvider>
      {/* Outer Box: NO minHeight here */}
      <Box
        sx={{
          background: ' #F5F5F5',
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
        {/* Flex row for layout */}
        <Box sx={{ display: 'flex', backdropFilter: 'blur(2px)' }}>
          {!isMobile && <SideNav />}

          {/* Main content container with flex column */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              paddingLeft: !isMobile ? '280px' : 0,
              transition: 'padding 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh', // only here!
            }}
          >
            <Header />

            {/* Page Content */}
            <Box
              sx={{
                flex: 1, // this is crucial to push Footer down
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
