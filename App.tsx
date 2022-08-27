import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </>
  );
}

