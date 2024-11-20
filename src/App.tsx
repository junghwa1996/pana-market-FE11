import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

import Headers from './layout/Headers/Headers';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      {location.pathname !== '/login' && location.pathname !== '/notfound' && (
        <Headers />
      )}
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
