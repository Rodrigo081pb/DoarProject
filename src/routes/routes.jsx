import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import EsqueceuSenha from '../pages/EsqueceuSenha/EsqueceuSenha'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
      </Routes>
    </BrowserRouter>
  );
}
