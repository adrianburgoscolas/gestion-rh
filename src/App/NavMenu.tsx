import { styled } from '@mui/material/styles';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonGroup from '@mui/material/ButtonGroup';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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

const StyledMenuHeadTypo = styled(Typography)({
  '& div':{
    margin: 0,
  },
  textAlign: 'left',
  font: 'italic normal bold 18px/20px Roboto',
  letterSpacing: '0px',
  color: '#0',
  opacity: '1',
});

const StyledMenuItemTypo = styled(Typography)({
  textAlign: 'left',
  font: 'italic normal normal 18px/20px Roboto',
  letterSpacing: '0px',
  color: '#6E6B6B',
  opacity: '1',
});

const StyledMenuMailTypo = styled(Typography)({
  '& div':{
    margin: 0,
  },
  textAlign: 'left',
  font: 'italic normal normal 15px/20px Roboto',
  letterSpacing: '0px',
  color: '#4646468A',
  opacity: '1',
});

export default function NavMenu() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <StyledMenuHeadTypo>
                <ListItemText primary='Carlos Diaz'/>
              </StyledMenuHeadTypo>
              <StyledMenuMailTypo>
                <ListItemText primary='carlos@gmail.com'/>
              </StyledMenuMailTypo>
            </Stack>
          </ListItemButton>
        <Divider />
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginTop: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <AccountCircleRoundedIcon sx={{color: '#4F2D80'}} fontSize='large' />
            </ListItemIcon>
            <StyledMenuItemTypo>
              <ListItemText primary='Perfil'/>
            </StyledMenuItemTypo>
          </ListItemButton>
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginBottom: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <StyledMenuItemTypo>
                <SettingsIcon sx={{color: '#4F2D80'}} fontSize='large' />
              </StyledMenuItemTypo>
            </ListItemIcon>
            <StyledMenuItemTypo>
              <ListItemText primary='Configuracion'/>
            </StyledMenuItemTypo>
          </ListItemButton>
        <Divider />
          <ListItemButton onClick={handleClose} sx={{gap: '10px', marginTop: '10px'}}>
            <ListItemIcon sx={{justifyContent: 'right'}}>
              <LogoutIcon sx={{color: '#4F2D80'}} fontSize='large' />
            </ListItemIcon>
            <StyledMenuItemTypo>
              <ListItemText primary='Cerrar Sesion' />
            </StyledMenuItemTypo>
          </ListItemButton>
        </MenuList>
      </StyledMenu>
    </ButtonGroup>
  );
}
