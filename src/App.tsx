import { useLocation } from 'react-router-dom';
import Headers from './layout/Headers/Headers';
import AppRoutes from './routes/AppRoutes';

function App() {
  const location = useLocation();
  const hasLogin = false;
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/notfound' && (
        <Headers hasLogin={hasLogin} />
      )}
      <AppRoutes />
    </>
  );
}

export default App;
