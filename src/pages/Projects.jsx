import { Box, Grid, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { usePageTitle } from '../context/PageTitleContext'
import ProjectCard from '../components/ProjectCard'
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.jpeg';
import project3Img from '../assets/project3.png';

function Projects() {
  const { setTitle } = usePageTitle()
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  useEffect(() => {
    setTitle('Projects')
  }, [setTitle])

  const projects = [
    {
      title: 'The Hurdle Game',
      description:
        'Build an engaging endless runner during a game development course. Players control a character running along a long track, navigating various hurdles while maintaining continuous movement.',
      image: project1Img,
    },
    {
      title: 'Chess Game' ,
      description:
        'Developed a command-line-based Chess game in C++ with full gameplay mechanics, including piece movement, check detection, and win conditions. The project focuses on providing a user-friendly experience with clear prompts and valid move checks.',
      image: project2Img,
    },
    {
      title: 'Text Editor',
      description:
        'Designed a basic text editor using data structures and algorithms, allowing users to create, edit, and save text documents. The project implements efficient operations for text manipulation, offering an interactive and responsive editing environment.',
      image: project3Img,
    },
  ]

  return (
    <Box sx={{ 
      maxWidth: drawerOpen && !isMobile ? 'calc(100% - 250px)' : '100%',
      transition: 'max-width 0.3s ease'
    }}>
    <Box 
      className="section"
      sx={{
        marginTop: '30px',
        paddingLeft: '20px', 
        paddingTop: '20px',  
      }}
    >
      <Grid container spacing={4} justifyContent="flex-start"> 
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              image={project.image} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  )
}

export default Projects