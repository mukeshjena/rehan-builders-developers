// src/App.jsx
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}
