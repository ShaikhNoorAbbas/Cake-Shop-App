import '../styles/globals.css'
import Navbar from '../layouts/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '../featured/store';
const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    }
  }
})
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp