import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import DrawerNav from './App/Drawer';
import NavMenu from './App/NavMenu';
const drawerWidth = 280;

//AppBar
const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${drawerWidth}px)`, 
  ml: `${drawerWidth}px`, 
  backgroundColor: 'white',
  boxShadow: '0px 2px 3px #142F471F',
});

//Styled Breadcrumb Links
const StyledLink = styled(Link)({
  '&.MuiLink-root': {
    textDecoration: 'none',
    color: '#464646',
  },
  '&:hover': {
    textDecoration: 'underline',
  }
});

//Styled breadcrumb text
const StyledBreadcrumbTypo = styled(Typography)({
    textAlign: 'left',
    font: 'normal normal normal 14px/24px Poppins',
    letterSpacing: '0px',
    color: '#464646',
    opacity: '1',
});

//Styled breadcrumb active text
const StyledBreadcrumbActiveTypo = styled(Typography)({
    textAlign: 'left',
    font: 'normal normal medium 14px/24px Poppins',
    letterSpacing: '0px',
    color: '#4F2D80',
    opacity: '1',
});


export default function App() {

  const [nav, setNav] = useState('Usuarios');

  return (
    <Box sx={{ display: 'flex', minWidth: '810px', minHeight: '1080px' }}>
      <StyledAppBar>
        <Toolbar id='anchorhere'>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: '1'}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft: '22px'}}>
              {
                ['Inicio', 'Administracion'].map((link, i) =>(
                  <StyledLink key={link + i} href={`/#${link.toLowerCase()}`}>
                    <StyledBreadcrumbTypo>
                      {link}
                    </StyledBreadcrumbTypo>
                  </StyledLink>
                ))
              }
              <StyledBreadcrumbActiveTypo color="text.primary">{nav}</StyledBreadcrumbActiveTypo>
            </Breadcrumbs>
            <NavMenu />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <DrawerNav setnav={setNav} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#F3F5F7', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
