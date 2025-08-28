// Dados mock de categorias (futuramente podem vir de uma API / banco)
export const categorias = [
  { nome: "Doação de Alimentos", img: "/cat-alimentos.jpg", total: 42 },
  { nome: "Roupas", img: "/cat-roupas.jpg", total: 18 },
  { nome: "Animais", img: "/cat-animais.jpg", total: 27 },
  { nome: "Materiais Escolares", img: "/cat-escola.jpg", total: 15 },
  { nome: "Recicláveis", img: "/cat-reciclagem.jpg", total: 9 },
  { nome: "Voluntariado", img: "/cat-voluntariado.jpg", total: 6 },
  { nome: "Saúde", img: "/cat-saude.jpg", total: 11 },
  { nome: "Moradia", img: "/cat-moradia.jpg", total: 8 },
];

/**
 * Simula chamada assíncrona (futuro: substituir por fetch real ex: fetch('/api/categorias'))
 * Mantido separado para facilitar testes e futura troca de fonte de dados.
 */
export async function fetchCategorias() {
  // atraso artificial
  await new Promise(r => setTimeout(r, 600));
  return categorias;
}

