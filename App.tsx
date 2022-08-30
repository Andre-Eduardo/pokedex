import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import { Welcome } from './src/pages/Welcome';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        {/* <Welcome /> */}
        <Home />
      </ThemeProvider>
    </>
  );
}

