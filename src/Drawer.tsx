import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from 'material-ui-image';
import Logo from './assets/images/logo/Group 11456.svg';
import { useState } from 'react';

const securityItemIconsArr = [
  <svg xmlns="http://www.w3.org/2000/svg" width="17.722" height="22.395" viewBox="0 0 17.722 22.395">
  <g id="_3_User" data-name="3 User" transform="translate(-5.639)">
    <path id="_3_Friends" data-name="3 Friends" d="M0,18.588c0-3.047,4.055-3.836,8.861-3.836,4.78,0,8.862.762,8.862,3.809s-4.056,3.834-8.862,3.834C4.081,22.395,0,21.634,0,18.588ZM3,5.925a5.864,5.864,0,1,1,11.727,0A5.864,5.864,0,1,1,3,5.925Z" transform="translate(5.639)" fill="currentColor"/>
  </g>
</svg>, 
  <svg xmlns="http://www.w3.org/2000/svg" width="18.788" height="22.964" viewBox="0 0 18.788 22.964">
  <path id="ic_verified_user_24px" d="M12.394,1,3,5.175v6.263c0,5.793,4.008,11.21,9.394,12.526,5.386-1.315,9.394-6.733,9.394-12.526V5.175ZM10.307,17.7,6.131,13.526,7.6,12.054l2.7,2.693,6.879-6.879L18.657,9.35Z" transform="translate(-3 -1)" fill="currentColor"/>
</svg>, 
  <svg xmlns="http://www.w3.org/2000/svg" width="20.054" height="22.283" viewBox="0 0 20.054 22.283">
  <path id="ic_assignment_24px" d="M20.826,3.228H16.169a3.329,3.329,0,0,0-6.284,0H5.228A2.235,2.235,0,0,0,3,5.457v15.6a2.235,2.235,0,0,0,2.228,2.228h15.6a2.235,2.235,0,0,0,2.228-2.228V5.457A2.235,2.235,0,0,0,20.826,3.228Zm-7.8,0a1.114,1.114,0,1,1-1.114,1.114A1.117,1.117,0,0,1,13.027,3.228Zm2.228,15.6h-7.8V16.6h7.8ZM18.6,14.37H7.457V12.141H18.6Zm0-4.457H7.457V7.685H18.6Z" transform="translate(-3 -1)" fill="currentColor"/>
</svg>, 
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 25.782 22.681">
  <g id="Group_13362" data-name="Group 13362" transform="translate(1357 -2766.212)">
    <g id="Iconly_Bold_Activity" data-name="Iconly/Bold/Activity" transform="translate(-1357 2768.809)">
      <g id="Activity" transform="translate(0)">
        <path id="Activity-2" data-name="Activity" d="M14.1,20.084H5.954a6.024,6.024,0,0,1-4.383-1.575A6.028,6.028,0,0,1,0,14.131V5.974A6.061,6.061,0,0,1,1.571,1.582,6.011,6.011,0,0,1,5.954,0h8.873c-.044.274-.066.822-.066.826a4.485,4.485,0,0,0,4.475,4.485,5.194,5.194,0,0,0,.815-.075v8.894a6.028,6.028,0,0,1-1.571,4.379A6.022,6.022,0,0,1,14.1,20.084Zm-3.626-7.822c-3.338,0-4.961.736-4.961,2.25s1.623,2.265,4.961,2.265,4.961-.736,4.961-2.25S13.811,12.262,10.473,12.262Zm0-8.714a3.4,3.4,0,0,0-3.283,3.5,3.4,3.4,0,0,0,3.283,3.5,3.4,3.4,0,0,0,3.283-3.5A3.4,3.4,0,0,0,10.473,3.549Z" transform="translate(0)" fill="currentColor"/>
      </g>
    </g>
    <path id="Fill_4" data-name="Fill 4" d="M3.291,0A3.291,3.291,0,1,0,6.582,3.291,3.293,3.293,0,0,0,3.291,0" transform="translate(-1340.901 2766.212)" fill="currentColor"/>
    <path id="Path_33905" d="M3.39,1.87,1.357.229a.785.785,0,0,0-1.108,0,.863.863,0,0,0,0,1.213h0L1.936,3.376a1.045,1.045,0,0,0,1.489,0,1.073,1.073,0,0,0,0-1.506Z" transform="translate(-1334.953 2771.554)" fill="currentColor"/>
  </g>
</svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="24.756" height="25.53" viewBox="0 0 24.756 25.53">
  <g id="work_outline-24px" transform="translate(0 0.75)">
    <path id="Path_3997" data-name="Path 3997" d="M0,0H24.756V24.756H0Z" transform="translate(0 0.024)" fill="none"/>
    <g id="briefcase-1" transform="translate(2.063 -0.75)">
      <path id="Path_27049" data-name="Path 27049" d="M1.5,13.95v-.391C1.5,10.859,1.5,6,9.059,6h6.479C23.1,6,23.1,10.859,23.1,13.559v.391a2.474,2.474,0,0,1-.662.884c-.732.627-2.12,1.155-4.737,1.155h-.27v-.27a.81.81,0,1,0-1.62,0v.27H8.789v-.27a.81.81,0,1,0-1.62,0v.27H6.9c-2.617,0-4.006-.528-4.737-1.155A2.474,2.474,0,0,1,1.5,13.95Zm14.308,3.659H8.789v.27a.81.81,0,1,1-1.62,0v-.27H6.9a9.5,9.5,0,0,1-5.4-1.242c.04,2.76.57,6.911,7.556,6.911H15.9c6.654,0,7.158-4.151,7.2-6.911a9.5,9.5,0,0,1-5.4,1.242h-.27v.27a.81.81,0,1,1-1.62,0Z" transform="translate(-1.5 -1.1)" fill="currentColor" fill-rule="evenodd"/>
      <path id="Path_27050" data-name="Path 27050" d="M7.8,6.151s0,0,0,0h0v0h0Zm8.768,0a.774.774,0,0,0,1.547,0h-.774c.774,0,.774,0,.774,0h0V6.122c0-.013,0-.03,0-.051,0-.042,0-.1-.011-.168a4.873,4.873,0,0,0-.084-.556,5.148,5.148,0,0,0-.665-1.671c-.8-1.274-2.343-2.427-5.169-2.427S7.808,2.4,7.012,3.677a5.149,5.149,0,0,0-.665,1.671,4.875,4.875,0,0,0-.084.556c-.006.069-.009.126-.011.168,0,.021,0,.038,0,.051v.025h0a.774.774,0,0,0,1.547,0h0V6.136c0-.019,0-.051.006-.094a3.327,3.327,0,0,1,.057-.378A3.6,3.6,0,0,1,8.324,4.5c.493-.789,1.525-1.7,3.857-1.7s3.363.91,3.857,1.7A3.6,3.6,0,0,1,16.5,5.663a3.305,3.305,0,0,1,.057.378c0,.043.006.076.006.094v.018Z" transform="translate(-1.35 -1.25)" fill="currentColor" fill-rule="evenodd"/>
    </g>
  </g>
</svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 25.782 22.681">
  <g id="Group_13362" data-name="Group 13362" transform="translate(1357 -2766.212)">
    <g id="Iconly_Bold_Activity" data-name="Iconly/Bold/Activity" transform="translate(-1357 2768.809)">
      <g id="Activity" transform="translate(0)">
        <path id="Activity-2" data-name="Activity" d="M14.1,20.084H5.954a6.024,6.024,0,0,1-4.383-1.575A6.028,6.028,0,0,1,0,14.131V5.974A6.061,6.061,0,0,1,1.571,1.582,6.011,6.011,0,0,1,5.954,0h8.873c-.044.274-.066.822-.066.826a4.485,4.485,0,0,0,4.475,4.485,5.194,5.194,0,0,0,.815-.075v8.894a6.028,6.028,0,0,1-1.571,4.379A6.022,6.022,0,0,1,14.1,20.084Zm-3.626-7.822c-3.338,0-4.961.736-4.961,2.25s1.623,2.265,4.961,2.265,4.961-.736,4.961-2.25S13.811,12.262,10.473,12.262Zm0-8.714a3.4,3.4,0,0,0-3.283,3.5,3.4,3.4,0,0,0,3.283,3.5,3.4,3.4,0,0,0,3.283-3.5A3.4,3.4,0,0,0,10.473,3.549Z" transform="translate(0)" fill="currentColor"/>
      </g>
    </g>
    <path id="Fill_4" data-name="Fill 4" d="M3.291,0A3.291,3.291,0,1,0,6.582,3.291,3.293,3.293,0,0,0,3.291,0" transform="translate(-1340.901 2766.212)" fill="currentColor"/>
    <path id="Path_33905" d="M3.39,1.87,1.357.229a.785.785,0,0,0-1.108,0,.863.863,0,0,0,0,1.213h0L1.936,3.376a1.045,1.045,0,0,0,1.489,0,1.073,1.073,0,0,0,0-1.506Z" transform="translate(-1334.953 2771.554)" fill="currentColor"/>
  </g>
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Iconly_Bold_Folder" data-name="Iconly/Bold/Folder" transform="translate(0)">
    <g id="Folder" transform="translate(0 0)">
      <path id="Folder-2" data-name="Folder" d="M15.125,22H6.864C2.63,22,0,19.366,0,15.125V6.865C0,2.31,2.025,0,6.017,0H7.789a3.252,3.252,0,0,1,2.573,1.265l.967,1.287a1.619,1.619,0,0,0,1.265.616h3.377a5.991,5.991,0,0,1,4.405,1.5C21.46,5.751,22.006,7.471,22,9.779v5.357a6.905,6.905,0,0,1-1.841,5.024A6.926,6.926,0,0,1,15.125,22ZM5.907,12.969a.817.817,0,0,0-.826.826.826.826,0,0,0,.826.825H16.094a.82.82,0,0,0,.814-.825.811.811,0,0,0-.814-.826Z" transform="translate(0 0)" fill="currentColor"/>
    </g>
  </g>
</svg>
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
    font: 'normal normal normal 18px/20px Poppins !important',
    letterSpacing: '0px',
    opacity: 1,
});

//List Items Dinamic Styled
const StyledListItemButton = styled(ListItemButton)({
  backgroundColor: 'var(--list-item-bg) !important',
  color: 'var(--list-item-color) !important',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#4F2D80 !important',
    color: '#ffffff !important',
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

export default function DrawerMenu() {
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
              onClick={_ => setSecuritySelected(index)} 
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
              onClick={_ => setSecuritySelected(index + 4)} 
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
