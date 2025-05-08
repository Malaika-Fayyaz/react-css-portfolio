import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import picture from '../assets/mypicture2.jpg';

const DrawerContext = createContext();

export function DrawerProvider({ children }) {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  return (
    <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen, isMobile }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerState() {
  return useContext(DrawerContext);
}

function DrawerContent({ toggleDrawer, isMobile }) {
  const handleNavClick = () => {
    if (isMobile) toggleDrawer();
  };

  return (
    <>
      {/* Desktop close button */}
      {!isMobile && (
        <Box
          sx={{
            alignSelf: 'flex-end',
            pr: 2,
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 1200,
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
            <MenuIcon />
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
    </>
  );
}

function SideNav() {
  const { drawerOpen, setDrawerOpen, isMobile } = useDrawerState();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerStyles = {
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
  };

  return (
    <>
      {/* Persistent toggle button when drawer is closed (desktop only) */}
      {!drawerOpen && !isMobile && (
        <Tooltip title="Open Menu" placement="right">
          <IconButton
            onClick={toggleDrawer}
            sx={{
              position: 'fixed',
              top: 13,
              left: 15,
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
            top: 10,
            left: 10,
            zIndex: 1300,
            color: '#fff',
            backgroundColor: '#2C3E50',
            '&:hover': {
              backgroundColor: '#1E2B38',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Render separate drawers based on screen size */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={drawerStyles}
        >
          <DrawerContent toggleDrawer={toggleDrawer} isMobile={isMobile} />
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          open={drawerOpen}
          sx={drawerStyles}
        >
          <DrawerContent toggleDrawer={toggleDrawer} isMobile={isMobile} />
        </Drawer>
      )}
    </>
  );
}

export default SideNav;

