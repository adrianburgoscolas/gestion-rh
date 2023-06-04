import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const Base = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
});

export default function Dashboard() {
  return (
    <Base sx={{boxShadow: '0px 2px 3px #142F471F', height: '970px', width: '1590px'}}>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <Box sx={{flexGrow: '1'}}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Base>
  );
}
