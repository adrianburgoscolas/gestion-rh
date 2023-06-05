import { useContext } from 'react';
import { DashboardContext } from './DashboardProvider';
export default function useDashboard() {
  return useContext(DashboardContext);
}
