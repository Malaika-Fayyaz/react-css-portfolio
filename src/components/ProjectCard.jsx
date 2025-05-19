import { Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';

export default function ProjectCard({ title, description, image }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Card sx={{
      height: 400,
      width: isMobile ? 320 : 400,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
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








