import React from "react"
import CsrRouter from "router";
import { ThemeProvider } from '@mui/material/styles'
import { Box, Container } from '@mui/material';
import { theme } from 'theme'

function App() {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      {/* <Container maxWidth="sm"> */}
        {/* <Box bgcolor="white" minHeight="100vh"> */}
        <ThemeProvider theme={theme}>
          <CsrRouter />
        </ThemeProvider>
        {/* </Box> */}
      {/* </Container> */}
     </Box>
  );
}

export default App;
