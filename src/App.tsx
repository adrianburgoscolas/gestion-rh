import  { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Drawer from './App/Drawer';
import NavMenu from './App/NavMenu';
import Dashboard from './App/Dashboard';
import NavBreadcrumbs from './App/NavBreadcrumbs';

const drawerWidth = 280;

//AppBar
const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${drawerWidth}px)`, 
  ml: `${drawerWidth}px`, 
  backgroundColor: 'white',
  boxShadow: '0px 2px 3px #142F471F',
});


export default function App() {

  const [nav, setNav] = useState('Usuarios');

  return (
    <Box sx={{ display: 'flex', minWidth: '810px', minHeight: '1080px' }}>
      <StyledAppBar>
        <Toolbar>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: '1'}}>
            <NavBreadcrumbs path={['Inicio', 'Administracion']} nav={nav} />
            <NavMenu />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Drawer setnav={setNav} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#F3F5F7', p: 3 }}
      >
        <Toolbar />
        <Dashboard />
      </Box>
    </Box>
  );
}
