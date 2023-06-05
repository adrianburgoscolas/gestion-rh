import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useDashboard from './useDashboard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const HeadTypo = styled(Typography)({
  textAlign: 'left',
  font: 'normal normal 600 26px/24px Poppins',
  letterSpacing: '0.2px',
  color: '#4F2D80',
  opacity: '1',
  flexGrow: '1',
});

const StyledFormControl = styled(FormControl)({
});

const StyledOutlinedInput = styled(OutlinedInput)({
  color: '#46464680',
  '& .MuiOutlinedInput-notchedOutline': {
  height: '48px',
  marginTop: '-2px',
    borderColor: '#09378C33'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#09378C33'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#09378C33'
  },
});

const StyledInputLabel = styled(InputLabel)({
  color: '#46464680',
  '&.Mui-focused': {
    color: '#46464680',
  }
});

const StyledButton = styled(Button)({
  '&.MuiButton-root:hover': {
    backgroundColor: '#4F2D80',
    color: 'white',
  },
  '&.MuiButton-root': {
    textTransform: 'none',
    backgroundColor: 'var(--button-bg)',
    color: 'var(--button-color)',
    border: '1px solid #09378C33',
    borderRadius: '5px',
    padding: '10px',
    font: 'normal normal 500 15px/20px Poppins',
  }
});

const ActiveStyle = {
  '--button-color': 'white',
  '--button-bg': '#4F2D80',
} as React.CSSProperties;

const DefaultStyle = {
  '--button-color': '#4F2D80',
  '--button-bg': 'white',
} as React.CSSProperties;

const StyledBox = styled(Box)({
  height: '33px',
  '& .MuiButton-root':{
    font: 'normal normal 500 17px/20px Poppins',
    width: '14ch',
    borderRadius: 0,
    border: 'none',
    borderBottom: 'var(--button-border)',
    textTransform: 'none',
    color: 'var(--button-color)',
    backgroundColor: 'white',
  },
  '& .MuiButton-root:hover': {
    border: 'none',
    borderBottom: 'var(--button-border)',
    color: '#4F2D80',
    backgroundColor: 'white',
  },
});

const GroupActiveStyle = {
  '--button-color': '#4F2D80',
  '--button-border': '2px inset #4F2D80',
} as React.CSSProperties;

const GroupDefaultStyle = {
  '--button-color': '#46464680',
  '--button-border': 'none',
} as React.CSSProperties;

export default function DashboardHead() {

  const {
    open, 
    handleClose, 
    handleClick, 
    anchorEl, 
    datePickerValue,
    setDatePickerValue,
    all,
    setAll,
    active,
    setActive,
    uncheck,
    setUncheck,
    blocked,
    setBlocked,
    radioButtonValue,
    handleRadioButton,
  } = useDashboard();
  return (
    <Box component='header' sx={{padding: '40px 40px 0 40px',}}>
      <Toolbar style={{paddingLeft: 0}}>
        <HeadTypo>Usuarios</HeadTypo>
        <Box sx={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <StyledFormControl size='small' sx={{ m: '4px', width: '40ch'}} variant="outlined">
            <StyledInputLabel htmlFor='dashboard-search'>Buscar...</StyledInputLabel>
            <StyledOutlinedInput
              id="dashboard-search"
              endAdornment={<InputAdornment position="end"><SearchIcon sx={{color:'#4F2D80'}}  /></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              label='Buscar...'
            />
          </StyledFormControl>
          <StyledButton 
            sx={{width: '240px'}}
            style={open?ActiveStyle:DefaultStyle} 
            startIcon={<TuneIcon />} 
            endIcon={<KeyboardArrowDownIcon />} 
            size='medium' 
            variant='outlined'
            onClick={handleClick}
          >
            Fecha de creación
          </StyledButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{marginTop: '5px', '& MuiButtonBase-root':{color: '#113986', backgroundColor: '#113986'}}}
            elevation={20}
          >
            <FormControl sx={{marginLeft: '30px'}}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="hoy"
                name="radio-buttons-group"
                onChange={handleRadioButton} 
                value={radioButtonValue}
              >
                <FormControlLabel 
                  value="hoy" 
                  control={<Radio />} 
                  label="Hoy" 
                />
                <FormControlLabel 
                  value="7" 
                  control={<Radio />} 
                  label="Últimos 7 días" 
                />
                <FormControlLabel 
                  value="30" 
                  control={<Radio />} 
                  label="Últimos 30 días" 
                />
                <FormControlLabel 
                  value="90" control={<Radio />} 
                  label="Últimos 90 días" 
                />
                <FormControlLabel 
                  value="1y" 
                  control={<Radio />} 
                  label="Este año" 
                />
                <FormControlLabel 
                  value="12m" 
                  control={<Radio />} 
                  label="Últimos 12 meses" 
                />
                <FormControlLabel 
                  value="range" 
                  control={<Radio />} 
                  label="Rango" 
                />
              </RadioGroup>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar  value={datePickerValue} onChange={(newValue) => setDatePickerValue(newValue)} />
            </LocalizationProvider>
            <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
              <Button onClick={handleClose} variant="contained" disableElevation>
              Limpiar
              </Button>
            </Box>
          </Menu>
          <StyledButton
            style={DefaultStyle} 
            startIcon={<AddIcon />} 
            size='medium' 
            variant='outlined'
          >
            Adicionar
          </StyledButton>
          </Box>
      </Toolbar>
      <Toolbar style={{padding: 0, paddingBottom: '30px', minHeight: '50px'}}>
        <ButtonGroup sx={{gap: '20px'}}>
          <StyledBox>
            <Button onClick={() => setAll((state: string) => !state)} style={all?GroupActiveStyle:GroupDefaultStyle}>Todos</Button>
          </StyledBox>
          <StyledBox>
            <Button onClick={() => setActive((state: string) => !state)} style={active?GroupActiveStyle:GroupDefaultStyle}>Activos</Button>
          </StyledBox>
          <StyledBox>
            <Button  onClick={() => setUncheck((state: string) => !state)} style={uncheck?GroupActiveStyle:GroupDefaultStyle}>Sin Verificar</Button>
          </StyledBox>
          <StyledBox>
            <Button  onClick={() => setBlocked((state: string) => !state)}style={blocked?GroupActiveStyle:GroupDefaultStyle}>Bloqueados</Button>
          </StyledBox>
        </ButtonGroup>
      </Toolbar>
    </Box>
  );
}
