import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ROUTES from './constants/routes';
import './styles/global.css'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={ROUTES.TODO} />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.TODO} />
        <Route path='/*' element={<Navigate to={ROUTES.TODO} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
