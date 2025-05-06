import { Drawer, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import picture from '../assets/mypicture2.jpg';

function SideNav() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: ' #2C3E50',
          borderRight: 'linear-gradient(180deg,rgba(53, 47, 47, 0.97) 0%,rgba(77, 74, 74, 0.97)) 100%',
          color: 'var(--text-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
        },
      }}
    >
      <Avatar
        src={picture}
        sx={{ width: 150, height: 150, border: '3px solid var(--primary-color)', marginBottom: '20px' }}
      />
      <Typography variant="h5" sx={{ marginBottom: '10px', color: 'rgba(240, 229, 229, 0.86)' }}>
        Malaika Fayyaz
      </Typography>
      <Typography sx={{ marginBottom: '20px', textAlign: 'center', color: "rgba(255, 255, 255, 0.86)" }}>
        Graphic Designer | Game Developer | Content Writer
      </Typography>
      <List sx={{ width: '100%' }}>
  {[
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ].map((item) => (
    <ListItem 
      button 
      key={item.text} 
      component={Link} 
      to={item.path}
      sx={{ 
        color: 'inherit',
        '&:hover': {
          '& .MuiListItemText-root': {
            color: 'rgba(199, 189, 189, 0.86)'
          },
          '& .MuiListItemIcon-root': {
            color: 'rgba(199, 189, 189, 0.86)'
        }
      }}}
    >
      <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
        {item.icon}
      </ListItemIcon>
      <ListItemText 
        primary={item.text} 
        sx={{
          transition: 'color 0.3s ease',
        }}
      />
    </ListItem>
  ))}
</List>
    </Drawer>
  );
}

export default SideNav;