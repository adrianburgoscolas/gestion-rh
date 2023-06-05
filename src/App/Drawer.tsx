import DrawerView from './Drawer/DrawerView';
import useDrawer from './Drawer/useDrawer';

export default function Drawer({setnav}:{setnav: React.Dispatch<React.SetStateAction<string>>}) {

  const {selected, setSelected} = useDrawer();

  return (
    <>
      <DrawerView setnav={setnav} selected={selected} setSelected={setSelected} />
    </>
  );
}
