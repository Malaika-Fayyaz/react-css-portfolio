import { Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';

export default function ProjectCard({ title, description, image }) {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Card sx={{
      height: 400,
      width: isMobile ? 320 : 400,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'var(--card-bg)',
      backdropFilter: 'blur(10px)',
      border: '2px solid #2C3E50',
      borderRadius: '50px',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 5px 10px #2C3E50'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3" sx={{ color: "#2C3E50" }} fontWeight= {500}>
          {title}
        </Typography> 
        <Typography variant="body2" color="var(--text)" sx={{ color: "#000" || 'var(--primary)' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}




















// 
// import { Card, CardMedia, CardContent, Typography } from '@mui/material'
// import { useState } from 'react'

// function ProjectCard({ title, description, image }) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <Card
//       sx={{
//         width: 300,
//         height: 470,
//         border: '2px solid var(--primary-color)',
//         transition: 'transform 0.3s ease',
//         transform: isHovered ? 'scale(1.05)' : 'scale(1)',
//         '&:hover': {
//           boxShadow: '0 0 15px var(--primary-color)',
//         },
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <CardMedia
//         component="img"
//         height="200"
//         image={image}
//         alt={title}
//         sx={{
//           transition: 'transform 0.3s ease-in-out',
//           transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//         }}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" color="var(--primary-color)">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="var(--text-color)">
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// export default ProjectCard