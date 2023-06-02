import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {

  const Div = styled.div({
      backgroundColor: 'teal',
    },
    props => ({color: props.color})
  );

  return (
    <>
      <CssBaseline />
      <main>
        <Div color='white'>Hola</Div>
      </main>
    </>
  );
}
