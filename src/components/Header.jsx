
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import picture from '../assets/mypicture2.jpg';

function Header() {
  const { title } = usePageTitle(); 

  return (
    <AppBar position="fixed" sx={{ 
      width: { xs: '100%', sm: 'calc(100% - 250px)' },
      backgroundColor: 'var(--secondary)',
      borderBottom: '2px solid var(--primary)'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: '#6D7B8D'}}>
          {title}
        </Typography>
        <Avatar src={picture} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;