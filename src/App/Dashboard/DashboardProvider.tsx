import Dayjs from 'dayjs';
import React from 'react';
import { createContext, useEffect, useState } from 'react';

export const DashboardContext = createContext<any>(null);

export default function DashboardProvider({children}:{children: React.ReactNode}) {

  //date time picker state and handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  };
  function handleClose() {
    setAnchorEl(null);
  };

  //date picker state
  const [datePickerValue, setDatePickerValue] = useState(Dayjs());
  const [radioButtonValue, setRadioButtonValue] = useState('hoy');

  function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>) {
    setRadioButtonValue((e.target as HTMLInputElement).value);
    setAnchorEl(null);
  }

  //useEffect(() => console.log(radioButtonValue) )
  //dashboard header buttoms group states
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [uncheck, setUncheck] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    let get = false;
    async function getData() {
      const res = await fetch('https://dummyjson.com/users');
      if(!get){
        const data = await res.json();
        setData(data.users)
      }
    }
    getData()
    return () => {
      get = true;
    };
  },[]);

  return (
    <DashboardContext.Provider value={{
        data, 
        anchorEl, 
        setAnchorEl,
        open,
        handleClick,
        handleClose,
        datePickerValue,
        setDatePickerValue,
        radioButtonValue,
        setRadioButtonValue,
        handleRadioButton,
        buttonList: [
          {state: all, setter: setAll, text: 'Todos'}, 
          {state: active, setter: setActive, text: 'Activo'}, 
          {state: uncheck, setter: setUncheck, text: 'Verificado'}, 
          {state: blocked, setter: setBlocked, text: 'Bloqueado'}
        ]
      }}>
      {children}
    </DashboardContext.Provider>
  );
}
