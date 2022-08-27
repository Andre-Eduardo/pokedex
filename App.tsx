import { StatusBar } from 'expo-status-bar';
import AppProvider from './src/context';

import { Home } from './src/pages/Home';
import { Theme } from './src/template/theme';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppProvider>
        <Theme>
          <Home />
        </Theme>
      </AppProvider>
    </>
  );
}

