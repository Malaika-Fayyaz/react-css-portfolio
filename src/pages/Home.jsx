import { Box, Typography, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { usePageTitle } from '../context/PageTitleContext'

function Home() {
  const { setTitle } = usePageTitle()
  const isMobile = useMediaQuery('(max-width:768px)')

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  return (
    <Box
      sx={{
        marginTop: isMobile ? '80px' : '100px',
        padding: isMobile ? '20px' : '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '50px',
          marginTop: isMobile ? '20px' : '100px',
        }}
      >
        <Box
          component="img"
          src="/mypicture2.jpg"
          alt="Profile Picture"
          sx={{
            width: isMobile ? 250 : 450,
            height: isMobile ? 250 : 450,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid var(--primary-color)',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px var(--primary-color)',
            },
          }}
        />
        <Box
          sx={{
            maxWidth: 800,
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: 800,
              color: 'rgb(249, 249, 252)',
              marginBottom: '20px',
            }}
          >
            Malaika Fayyaz
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'var(--primary-color)',
              marginBottom: '10px',
              fontWeight: 600,
              fontSize: isMobile ? '24px' : '28px',
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              color: 'var(--text-color)',
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
  )
}

export default Home