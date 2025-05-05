import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { usePageTitle } from '../context/PageTitleContext'

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMobile = useMediaQuery('(max-width:768px)')
  const { title } = usePageTitle()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" sx={{ width: isMobile ? '100%' : 'calc(100% - 250px)', backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--primary-color)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile && (
          <IconButton color="inherit" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Avatar src="/mypicture2.jpg" />
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Education</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header