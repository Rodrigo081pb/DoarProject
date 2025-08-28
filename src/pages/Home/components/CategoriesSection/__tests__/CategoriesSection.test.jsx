import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionCategorias from '../CategoriesSection.jsx';

// Teste simples garantindo que o componente monta e mostra o título default.
// Futuras extensões: testar estados de loading (mock fetchCategorias), erro e renderização de cards.
describe('SectionCategorias', () => {
  it('renderiza título padrão', () => {
    render(<SectionCategorias />);
    expect(screen.getByText(/Explore Categorias/i)).toBeInTheDocument();
  });
});
