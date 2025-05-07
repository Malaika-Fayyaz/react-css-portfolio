
import { AppBar, Toolbar, Typography, Avatar, useMediaQuery } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import picture from '../assets/mypicture2.jpg';
import { useDrawerState } from './SideNav'; 

function Header() {
  const { title } = usePageTitle(); 
  const isMobile = useMediaQuery('(max-width:768px)');
  const { drawerOpen } = useDrawerState(); 


  return (
    <AppBar position="fixed" sx={{ 
      width: drawerOpen? 'calc(100% - 250px)' : '100%',
      background: ' #F5F5F5',
      borderBottom: '2px solid var(--primary)'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ textAlign: isMobile? "center": "left", paddingLeft: !isMobile && drawerOpen? '0%' : '5%',
          flexGrow: 1 , color: '#6D7B8D', fontWeight: 600}}>
          {title}
        </Typography>
        <Avatar src={picture} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;