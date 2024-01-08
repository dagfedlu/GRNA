import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link } from '@mui/material'
// import { Link } from "react-router-dom"

const drawerWidth = 240

export default function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        sx={{
          my: 2,
          fontSize: { xs: 30, sm: 50, md: 65 },
          fontWeight: 'bold',
          background:
            'var(--newww, linear-gradient(90deg, #63B4FF 0.21%, #002977 99.79%))',
          backgroundClip: 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}
      >
        GRNA
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='/'>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='/learn'>
            <ListItemText primary='Learn' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='/hgr'>
            <ListItemText primary='HGR' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', px: 3, py: 1 }}>
      <CssBaseline />
      <Box sx={{ width: '100%' }}>
        <Toolbar sx={{ width: '100%' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontSize: { xs: 30, sm: 50 },
                fontWeight: 'bold',
                background:
                  'var(--newww, linear-gradient(90deg, #63B4FF 0.21%, #002977 99.79%))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}
            >
              GRNA
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5 }}>
              <Button href='/' color='inherit'>
                <Typography sx={{ fontWeight: 'bold' }}>Home</Typography>
              </Button>
              <Button href='learn' color='inherit'>
                <Typography sx={{ fontWeight: 'bold' }}>Learn</Typography>
              </Button>
              <Button href='hgr' color='inherit'>
                <Typography sx={{ fontWeight: 'bold' }}>HGR</Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Box>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
