import { useState, useEffect } from 'react';
import { 
  Drawer, 
  Avatar, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  IconButton,
  useMediaQuery,
  Box,
  Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import picture from '../assets/mypicture2.jpg';

function SideNav() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  return (
    <>
      {/* Persistent toggle button when drawer is closed (desktop only) */}
      {!drawerOpen && !isMobile && (
        <Tooltip title="Open Menu" placement="right">
          <IconButton
            onClick={toggleDrawer}
            sx={{
              position: 'fixed',
              top: 20,
              left: 20,
              zIndex: 1200,
              color: '#fff',
              backgroundColor: '#2C3E50',
              '&:hover': {
                backgroundColor: '#1E2B38',
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300,
            color: '#fff',
            backgroundColor: '#2C3E50',
            '&:hover': {
              backgroundColor: '#1E2B38',
            }
          }}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#2C3E50',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0',
          },
        }}
      >
        {/* Desktop close button */}
        {!isMobile && (
          <Box sx={{ alignSelf: 'flex-end', pr: 2 }}>
            <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        <Avatar
          src={picture}
          sx={{ 
            width: 150, 
            height: 150, 
            border: '1px solid rgb(146, 159, 177)', 
            marginBottom: '20px' 
          }}
        />
        <Typography sx={{ 
          textAlign: 'center', 
          fontWeight: 600, 
          fontSize: '30px', 
          marginBottom: '10px', 
          color: '#fff', 
          wordWrap: 'break-word', 
          whiteSpace: 'normal' 
        }}>
          Malaika Fayyaz
        </Typography>
        <Typography sx={{ 
          marginBottom: '20px', 
          textAlign: 'center', 
          color: "rgb(146, 159, 177)" 
        }}>
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
              onClick={handleNavClick}
              sx={{ 
                color: 'inherit',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiListItemText-root': {
                    color: 'rgba(199, 189, 189, 0.86)'
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'rgba(199, 189, 189, 0.86)'
                  }
                }
              }}
            >
              <ListItemIcon sx={{ color: 'rgb(146, 159, 177)' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideNav;












// import { Drawer, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import SchoolIcon from '@mui/icons-material/School';
// import WorkIcon from '@mui/icons-material/Work';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import picture from '../assets/mypicture2.jpg';

// function SideNav() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 250,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 250,
//           boxSizing: 'border-box',
//           backgroundColor: ' #2C3E50',
//           borderRight: 'linear-gradient(180deg,rgba(53, 47, 47, 0.97) 0%,rgba(77, 74, 74, 0.97)) 100%',
//           color: 'var(--text-color)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           padding: '20px 0',
//         },
//       }}
//     >

//       <Avatar
//         src={picture}
//         sx={{ width: 150, height: 150, border: '1px solid rgb(146, 159, 177)', marginBottom: '20px' }}
//       />
//       <Typography sx={{ textAlign: 'center', fontWeight: 600 , fontSize: '30px', marginBottom: '10px', color: '#fff', wordWrap: 'break-word', whiteSpace: 'normal' }}>
//         Malaika Fayyaz
//       </Typography>
//       <Typography sx={{ marginBottom: '20px', textAlign: 'center', color: "rgb(146, 159, 177)" }}>
//         Graphic Designer | Game Developer | Content Writer
//       </Typography>
//       <List sx={{ width: '100%' }}>
//   {[
//     { text: 'Home', icon: <HomeIcon />, path: '/' },
//     { text: 'Education', icon: <SchoolIcon />, path: '/education' },
//     { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
//     { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
//   ].map((item) => (
//     <ListItem 
//       button 
//       key={item.text} 
//       component={Link} 
//       to={item.path}
//       sx={{ 
//         color: 'inherit',
//         '&:hover': {
//           '& .MuiListItemText-root': {
//             color: 'rgba(199, 189, 189, 0.86)'
//           },
//           '& .MuiListItemIcon-root': {
//             color: 'rgba(199, 189, 189, 0.86)'
//         }
//       }}}
//     >
//       <ListItemIcon sx={{ color: 'var(--primary-color)' }}>
//         {item.icon}
//       </ListItemIcon>
//       <ListItemText 
//         primary={item.text} 
//         sx={{
//           transition: 'color 0.3s ease',
//         }}
//       />
//     </ListItem>
//   ))}
// </List>
//     </Drawer>
//   );
// }

// export default SideNav;