import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/Actions/user';




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const user = useSelector((state) => state.userReducer.user);


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img  src='https://logos-world.net/wp-content/uploads/2023/02/CSGO-Logo.png' alt='Logo' style={{width :"110px" , marginBottom :"10px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' ,  } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                <MenuItem  onClick={()=>{navigate('/') && handleCloseNavMenu();} }>
                  <Typography textAlign="center"  href="/">Home</Typography>
                </MenuItem>
                
                <MenuItem  onClick={()=>{navigate('/AddContact') && handleCloseNavMenu();} } >
                <Typography textAlign="center" >AddContact</Typography>
              </MenuItem>

              

              <MenuItem   onClick={()=>{navigate('/listcontacts') && handleCloseNavMenu();} } >
              <Typography textAlign="center"  >ListContacts</Typography>
            </MenuItem>



            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , } }}>

              <Button               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/"
              >
                Home
              </Button>

              
              <Button               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/listcontacts"
              >
                Skins
              </Button>

              <Button               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/aboutus"
              >
                About
              </Button>
              
              <Button               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/contactus"
              >
                Contact
              </Button>

              <Button               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/players"
              >
                Players
              </Button>
              
              
              <Button onClick={handleCloseNavMenu} variant="contained" color="success" sx={{ my: 2, color: 'white', display: 'block' }} href="/AddContact">
              AddSkin
              </Button>

          </Box>


        {isAuth ?
          <div>
          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings" >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
              <Avatar alt="Remy Sharp" src="https://www.csgowallpapers.com/assets/images/original/csgowallpaper_906670938517_1611074074_278068613702.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

              <MenuItem onClick={handleCloseUserMenu} onClickCapture={()=>navigate(`/updatepassword/${user._id}`)} >
                <Typography textAlign="center" >Settings</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={()=>dispatch(logout())} >Logout</Typography>
            </MenuItem>

          </Menu>
        </Box>
          </div>
          :
          <div>
          <Box sx={{ flexGrow: 0 }}>
          <MenuItem  onClick={()=>{navigate('/login') && handleCloseNavMenu();} } >
          <Typography textAlign="center" >Login/Register</Typography>
        </MenuItem>
        </Box>
        </div>
        
        }  

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;