import { createContext, useState } from 'react';
import { DashboardContextValue } from './lib/utils';

export const DashboardContext = createContext<DashboardContextValue | null>(null);

export default function DashboardProvider({children}:{children: React.ReactNode}) {

  const [val, setVal] = useState('a');

  return (
    <DashboardContext.Provider value={{val}}>
      {children}
    </DashboardContext.Provider>
  );
}
