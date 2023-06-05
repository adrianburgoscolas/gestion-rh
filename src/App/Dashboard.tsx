import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DashboardProvider from './Dashboard/DashboardProvider';
import DashboardHead from './Dashboard/DashboardHead';
import DashboardBody from './Dashboard/DashboardBody';

const Base = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '60px',
});

export default function Dashboard() {
  return (
    <DashboardProvider>
      <Base sx={{boxShadow: '0px 2px 3px #142F471F', height: '970px', width: '1590px'}}>
        <DashboardHead />
        <DashboardBody />
      </Base>
    </DashboardProvider>
  );
}
