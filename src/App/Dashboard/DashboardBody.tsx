import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import {Avatar, Typography} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import useDashboard from '@/App/Dashboard/useDashboard';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledDataGrid = styled(DataGrid)({
  '& .header': {
    backgroundColor: '#E8E8E8',
    color: '#2C2E35',
    font: 'normal normal 500 17px/20px Poppins',
    letterSpacing: '0',
    opacity: '0.8',
    flexGrow: '1',
  },
});

const StyledBox = styled(Box)({
  marginTop:'10px',
  marginBottom:'10px',
  borderRadius: '5px',
  padding: '7px 15px',
  backgroundColor: 'var(--box-bg)',
});

const Active = {
  '--box-bg': '#56C57D',
} as React.CSSProperties;

const Blocked = {
  '--box-bg': '#DE5159',
} as React.CSSProperties;

const RoleBox = styled(Box)({
  borderRadius: '5px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: '#F4F1F7',
  minHeight: '40px',
  minWidth: '120px',
  color: '#4F2D80',
});

const columns: GridColDef[] = [
  { field: '',
    renderCell: () => (
      <Checkbox {...label} />
    ),minWidth: 100, headerClassName: 'header' },
  { field: 'firstName', headerName: 'Nombre de usuario', 
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px',  color: '#4F2D80'}}>
        <Avatar src={(params.row as any).image} />
        <Typography sx={{font: 'normal normal 500 14px/20px Poppins'}}>{params.value} {(params.row as any).lastName}</Typography>
      </Box>
    ),width: 250, headerClassName: 'header' },
  { field: 'email', headerName: 'Correo electrónico',
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Typography sx={{font: 'normal normal normal 14px/20px Poppins', color: '#1A0A00'}}>{params.value}</Typography>
    ), width: 250, headerClassName: 'header' },
  { field: 'phone', headerName: 'Teléfono', 
    renderCell: (params: GridRenderCellParams<Date>) => (
        <Typography>{params.value}</Typography>
    ),width: 150, headerClassName: 'header' },
  { field:'age', headerName: 'Estado',
    renderCell: (params: GridRenderCellParams<Date>) => (
      <StyledBox style={params.value > 40?Blocked:Active}>
        <Typography>{params.value > 40?'Bloqueado':'Activo'}</Typography>
      </StyledBox>
    ), width: 150, headerClassName: 'header' },
  { field: 'title', headerName: 'Roles', 
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Box sx={{display: 'flex', gap: '15px'}}>
        <RoleBox>
          <VerifiedUserIcon />
          <Typography sx={{color: '#1A0A00'}}>Usuario</Typography>
        </RoleBox>
        {(params.row as any).height < 170 &&
          <RoleBox>
          <VerifiedUserIcon />
          <Typography sx={{color: '#1A0A00'}}>{params.value}</Typography>
          </RoleBox>
        }
      </Box>
    ),width: 370, headerClassName: 'header' },
  { field: 'birthDate', headerName: 'Fecha de creación', 
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Typography sx={{font: 'italic normal normal 16px/24px Roboto'}}>{params.value}</Typography>
    ),width: 170, headerClassName: 'header' },
  { field: 'acctions', headerName: 'Acciones', 
    renderCell: () => (
      <Box sx={{display: 'flex', color: '#4F2D80'}}>
        <IconButton aria-label="edit">
          <ModeEditIcon  sx={{color: '#4F2D80'}}/>
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon  sx={{color: '#4F2D80'}}/>
        </IconButton>
      </Box>
    ),width: 146, headerClassName: 'header' },
];

export default function DashboardBody() {
  const { data } = useDashboard();
  return (
    <Box sx={{flexGrow: '1', overflow: 'scroll'}}>
      <StyledDataGrid 
        rows={data.map((obj:any) => Object.assign({}, obj,{title: obj.company.title}))} 
        columns={columns} 
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50]}
        rowHeight={58}
      />
    </Box>
  );
}
