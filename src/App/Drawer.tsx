import DrawerView from './Drawer/DrawerView';
import useDrawer from './Drawer/useDrawer';

export default function DrawerNav({setnav}:{setnav: Function}) {

  const {selected, setSelected} = useDrawer();

  return (
    <>
      <DrawerView setnav={setnav} selected={selected} setSelected={setSelected} />
    </>
  );
};
