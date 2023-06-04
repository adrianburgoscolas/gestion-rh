import NavMenuView from './NavMenu/NavMenuView';
import useNavMenu from './NavMenu/useNavMenu';

export default function NavMenu() {

  const {open, anchorEl, handleClick, handleClose} = useNavMenu();

  return (
    <>
      <NavMenuView open={open} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />
    </>
  );
}
