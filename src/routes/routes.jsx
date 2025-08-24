import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Exemplo de importação de páginas (adicione suas páginas reais aqui)
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
