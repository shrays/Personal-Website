import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);