import { useState } from 'react';

export default function useDrawer() {
  const [selected, setSelected] = useState(0);
  return {
    selected,
    setSelected
  };
}
