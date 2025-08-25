import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
}
