import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import DrawerMenu from './Drawer';
const drawerWidth = 280;

//AppBar
const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${drawerWidth}px)`, 
  ml: `${drawerWidth}px`, 
  backgroundColor: 'white',
  boxShadow: '0px 2px 3px #142F471F',
});

export default function App() {

  return (
    <Box sx={{ display: 'flex', minWidth: '1920px', minHeight: '1080px' }}>
      <CssBaseline />

      <StyledAppBar>
        <Toolbar>
        </Toolbar>
      </StyledAppBar>

      <DrawerMenu />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#F3F5F7', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
