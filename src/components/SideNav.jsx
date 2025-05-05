import { Drawer, Box, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import ContactMailIcon from '@mui/icons-material/ContactMail'

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
          backgroundColor: 'var(--bg-color)',
          borderRight: '2px solid var(--primary-color)',
          color: 'var(--text-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
        },
      }}
    >
      <Avatar
        src="/mypicture2.jpg"
        sx={{ width: 150, height: 150, border: '3px solid var(--primary-color)', marginBottom: '20px' }}
      />
      <Typography variant="h5" sx={{ marginBottom: '10px', color: 'var(--primary-color)' }}>
        Malaika Fayyaz
      </Typography>
      <Typography sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Graphic Designer | Game Developer | Content Writer
      </Typography>
      <List sx={{ width: '100%' }}>
        <ListItem button component={Link} to="/">
          <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/education">
          <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideNav