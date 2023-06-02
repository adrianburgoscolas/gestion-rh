import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'material-ui-image';
import Logo from './assets/images/logo/Group 11456.svg';

const drawerWidth = 280;

export default function App() {
  return (
    <Box sx={{ display: 'flex', minWidth: '1920px', minHeight: '1080px' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={1}
        sx={{ 
            width: `calc(100% - ${drawerWidth}px)`, 
            ml: `${drawerWidth}px`, 
            backgroundColor: 'white',
        }}
      >
        <Toolbar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            minHeight: '1080px',
            padding: '40px 23px',
            border: 'none'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Image src={Logo} style={{height: '63px', width: '230px', p: '0'}} />
        <Typography pt={5}>
          SEGURIDAD
        </Typography>
        <List>
          {['Usuarios', 'Roles', 'Trazas', 'Auditoría'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
