import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
} from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import picture from '../assets/mypicture2.jpg';
import { useDrawerState } from './SideNav'; 
import { useNavigate } from 'react-router-dom';

function Header() {
  const { title } = usePageTitle(); 
  const isMobile = useMediaQuery('(max-width:768px)');
  const { drawerOpen } = useDrawerState(); 
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{ 
        width: drawerOpen ? 'calc(100% - 250px)' : '100%',
        background: '#F5F5F5',
        borderBottom: '2px solid var(--primary)'
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            paddingLeft: !isMobile && drawerOpen ? '0%' : '5%',
            flexGrow: 1,
            color: '#6D7B8D',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        {/* Avatar Dropdown */}
        <Tooltip title="Profile options">
          <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
            <Avatar src={picture} />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: {
              mt: 1.5,
              minWidth: 150,
              '& .MuiMenuItem-root': {
                fontSize: '0.9rem',
              },
            },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleNavigate('/profile')}>My Profile</MenuItem>
          <MenuItem onClick={() => handleNavigate('/settings')}>Settings</MenuItem>
          <MenuItem onClick={() => alert('Logged out')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;




