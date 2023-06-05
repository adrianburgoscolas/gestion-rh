import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonGroup from '@mui/material/ButtonGroup';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {MouseEventHandler} from 'react';

//Styled AppBar menu typo
const StyledAppBarMenuTypo = styled(Typography)({
  textAlign: 'left',
  font: 'normal normal normal 20px/27px Roboto',
  letterSpacing: '0px',
  color: '#4F2D80',
  opacity: '1',
});

//Styled Menu
const StyledMenu = styled(Menu)({
  padding: '25px',
  marginTop: '14px',
  marginLeft: '-10px',
});

const StyledHeadListItemText = styled(ListItemText)({
  '& div':{
    margin: 0,
  },
  textAlign: 'left',
  font: 'italic normal bold 18px/20px Roboto',
  letterSpacing: '0px',
  color: '#0',
  opacity: '1',
});

const StyledListItemText = styled(ListItemText)({
  textAlign: 'left',
  font: 'italic normal normal 18px/20px Roboto',
  letterSpacing: '0px',
  color: '#6E6B6B',
  opacity: '1',
});

const StyledMailListItemText = styled(ListItemText)({
  '& div':{
    margin: 0,
  },
  textAlign: 'left',
  font: 'italic normal normal 15px/20px Roboto',
  letterSpacing: '0px',
  color: '#4646468A',
  opacity: '1',
});

export default function NavMenuView(
  {
    open, 
    anchorEl, 
    handleClick, 
    handleClose
  }:{
    open: boolean,
    anchorEl: HTMLElement | null,
    handleClick: MouseEventHandler<HTMLElement>,
    handleClose: MouseEventHandler<HTMLElement>,
  }) {
  return (
    <ButtonGroup sx={{gap: '10px'}} aria-label="outlined primary button group">
      <IconButton sx={{width: '40px', height: '40px'}}>
        <StyledAppBarMenuTypo>
          EN
        </StyledAppBarMenuTypo>
      </IconButton>
      <IconButton sx={{width: '40px', height: '40px', color: '#4F2D80'}} >
        <NotificationsIcon />
      </IconButton>
      <IconButton sx={{width: '40px', height: '40px', marginRight: '10px', color: '#4F2D80'}}>
        <SettingsIcon />
      </IconButton >
      <ButtonBase
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{width: '40px', height: '40px'}} />
      </ButtonBase>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList sx={{width: '270px'}}>
          <ListItemButton onClick={handleClose} sx={{gap: '15px', marginBottom: '20px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <Avatar sx={{width: '50px', height: '50px'}} />
            </ListItemIcon>
            <Stack>
              <StyledHeadListItemText primary='Carlos Diaz'/>
              <StyledMailListItemText primary='carlos@gmail.com'/>
            </Stack>
          </ListItemButton>
        <Divider />
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginTop: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <AccountCircleRoundedIcon sx={{color: '#4F2D80'}} fontSize='large' />
            </ListItemIcon>
            <StyledListItemText primary='Perfil'/>
          </ListItemButton>
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginBottom: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <SettingsIcon sx={{color: '#4F2D80'}} fontSize='large' />
            </ListItemIcon>
            <StyledListItemText primary='Configuracion'/>
          </ListItemButton>
        <Divider />
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginTop: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <LogoutIcon sx={{color: '#4F2D80'}} fontSize='large' />
            </ListItemIcon>
            <StyledListItemText primary='Cerrar Sesion' />
          </ListItemButton>
        </MenuList>
      </StyledMenu>
    </ButtonGroup>
  );
}
