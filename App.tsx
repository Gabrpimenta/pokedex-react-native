import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';
// import { Welcome } from './src/screens/Welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}
      <Home />
    </ThemeProvider>
  );
}
