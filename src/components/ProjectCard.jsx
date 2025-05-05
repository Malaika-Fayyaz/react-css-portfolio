import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

function ProjectCard({ title, description, image }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      sx={{
        width: 300,
        height: 470,
        border: '2px solid var(--primary-color)',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          boxShadow: '0 0 15px var(--primary-color)',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="var(--primary-color)">
          {title}
        </Typography>
        <Typography variant="body2" color="var(--text-color)">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProjectCard