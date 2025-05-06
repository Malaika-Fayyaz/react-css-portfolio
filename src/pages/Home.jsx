import { Box, Typography, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { usePageTitle } from '../context/PageTitleContext';
import profilePic from '../assets/mypicture2.jpg';

function Home() {
  const { setTitle } = usePageTitle();
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <Box
      sx={{
        marginTop: isMobile ? '60px' : '60px', // controlled top margin
        // padding: isMobile ? '20px' : '10px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '2rem' : '10rem',
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={profilePic}
        alt="Profile Picture"
        sx={{
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid  rgba(61, 50, 50, 0.86)',
          marginTop: isMobile ? '10px' : '60px',
          marginLeft: isMobile ? 0 : '-150px',
          transition: 'transform 0.4s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px  #000',
          },
        }}
      />

      {/* About Me Text */}
      <Box
        sx={{
          maxWidth: 800,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: isMobile ? '36px' : '48px',
            fontWeight: 800,
            color: '#f9f9fc',
            marginBottom: '20px',
          }}
        >
          Malaika Fayyaz
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: ' rgba(160, 149, 149, 0.86)',
            marginBottom: '10px',
            fontWeight: 400,
            fontSize: isMobile ? '24px' : '28px',
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
  );
}

export default Home;
