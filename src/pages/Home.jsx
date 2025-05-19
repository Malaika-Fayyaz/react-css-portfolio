import { Box, Typography, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { usePageTitle } from '../context/PageTitleContext';
import profilePic from '../assets/mypicture2.jpg';
import { useDrawerState } from '../components/SideNav'; 

function Home() {
  const { setTitle } = usePageTitle();
  const isMobile = useMediaQuery('(max-width:768px)');
  const { drawerOpen } = useDrawerState(); 

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <Box sx={{ 
      maxWidth: drawerOpen && !isMobile ? 'calc(100% - 250px)' : '100%',
      transition: 'max-width 0.3s ease'
    }}>
    <Box
      sx={{
        marginTop: isMobile ? '60px' : '60px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile? '20%' :'2%',
        marginLeft: isMobile? '0%' : drawerOpen? '-10%' : '-20%',
        gap: isMobile ? '2rem' : '3rem',
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={profilePic}
        alt="Profile Picture"
        sx={{
          width: isMobile ? 250 : 300,
          height: isMobile ? 250 : 300,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid  #2C3E50',
          marginTop: isMobile ? '10px' : '60px',
          transition: 'transform 0.4s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px  #2C3E50',
          },
        }}
      />

      {/* About Me Text */}
      <Box
        sx={{
          maxWidth: 800,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: ' #6D7B8D',
            marginBottom: '10px',
            fontWeight: 600,
            fontSize: isMobile ? '20px' : '25px',
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            color: 'rgb(0, 0, 0)',
            fontWeight: 300,
            lineHeight: 1.6,
            fontSize: isMobile ? '14px' : '16px',
          }}
        >
          Hello! <b>I'm Malaika Fayyaz</b>, a passionate and creative individual with a diverse skill set in graphic
          design, game development, and content writing. I believe that creativity is a bridge between technology and
          art, and I love working in spaces where these two worlds meet. My work is driven by purpose, always aiming to
          create meaningful and beautiful solutions that leave an impact. Aside from my technical endeavors, I enjoy
          playing basketball and badminton, sketching, and constantly seeking out new creative challenges.
        </Typography>
      </Box>
    </Box>
    </Box>
  );
}

export default Home;
