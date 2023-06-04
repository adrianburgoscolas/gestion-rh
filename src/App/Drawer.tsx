import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from 'material-ui-image';
import Logo from '../assets/images/logo/Group 11456.svg';
import { useState } from 'react';
import UserIcon from './Drawer/UserIcon';
import RoleIcon from './Drawer/RoleIcon';
import TraceIcon from './Drawer/TraceIcon';
import AuditIcon from './Drawer/AuditIcon';
import FilesIcon from './Drawer/FilesIcon';
import ProcessIcon from './Drawer/ProcessIcon';


const securityItemIconsArr = [
  <UserIcon />,
  <RoleIcon />, 
  <TraceIcon />, 
  <AuditIcon />,
  <FilesIcon />,
  <AuditIcon />,
  <ProcessIcon />
];

const StyledMenuTypo = styled(Typography)({
  textAlign: 'left',
  font: 'normal normal 600 18px/20px Poppins',
  letterSpacing: '0px',
  color: '#CBC7CF',
  textTransform: 'uppercase',
  opacity: 1,
});

const StyledItemTypo = styled(Typography)({
    textAlign: 'left',
    font: 'normal normal normal 18px/20px Poppins',
    letterSpacing: '0px',
    opacity: 1,
});

//List Items Dinamic Styled
const StyledListItemButton = styled(ListItemButton)({
  '&.Mui-selected:hover, &.Mui-selected':{ 
    backgroundColor: 'var(--list-item-bg)' 
  },
  color: 'var(--list-item-color)',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#4F2D80',
    color: '#ffffff',
  },
  transition: 'all 300ms',
});

const ActiveVars = {
  '--list-item-color': '#ffffff',
  '--list-item-bg': '#4F2D80',
} as React.CSSProperties;

const DefaultVars = {
  '--list-item-color': '#4F2D80',
  '--list-item-bg': '#ffffff',
} as React.CSSProperties;

const drawerWidth = 280;

export default function DrawerNav({setnav}:{setnav: Function}) {

  const [securitySelected, setSecuritySelected] = useState(0);

  return (
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
      <Image 
        src={Logo} 
        style={{height: '63px', width: '230px', padding: '0'}} 
        animationDuration={500}
      />
      <StyledMenuTypo sx={{marginTop: '40px', marginBottom: '12px'}}>
        seguridad
      </StyledMenuTypo>
      <List>
        {['Usuarios', 'Roles', 'Trazas', 'Auditoría'].map((text, index) => (
          <ListItem 
            key={text} 
            sx={{height: '48px', margin: '4px 0', paddingX: '0'}}
          >
            <StyledListItemButton
              style={securitySelected === index?ActiveVars:DefaultVars}
              sx={{height: 'inherit', margin: 'inherit'}}
              selected={securitySelected === index} 
              onClick={_ => {
                setnav(text)
                setSecuritySelected(index)
              }} 
            >
              <ListItemIcon style={{
                color: 'inherit',
                width: `${text === 'Auditoría'?'22':'18'}px`, 
                height: '22px',
              }}
              >
                {securityItemIconsArr[index]} 
              </ListItemIcon>
              <StyledItemTypo>
                {text}
              </StyledItemTypo>
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <StyledMenuTypo sx={{marginLeft: '15px', marginTop: '25px'}}>
        rrhh
      </StyledMenuTypo>
      <List>
        {['Expedientes', 'Trabajadores', 'Procesos'].map((text, index) => (
          <ListItem 
            key={text} 
            sx={{height: '48px', margin: '4px 0', paddingX: '0'}}
          >
            <StyledListItemButton
              style={securitySelected === index + 4?ActiveVars:DefaultVars}
              sx={{height: 'inherit', margin: 'inherit'}}
              selected={securitySelected === index + 4} 
              onClick={_ => {
                setnav(text)
                setSecuritySelected(index + 4)
              }} 
            >
              <ListItemIcon style={{
                color: 'inherit',
                width: `${text === 'Auditoría'?'22':'18'}px`, 
                height: '22px',
              }}
              >
                {securityItemIconsArr[index + 4]} 
              </ListItemIcon>
              <StyledItemTypo>
                {text}
              </StyledItemTypo>
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
