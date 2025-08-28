import { useState, useEffect } from 'react';
import { useInView } from '../../../../../hooks/useInView';
import { fetchCategorias } from '../components/categoriesData';
import { useCategoriesCarouselConfig } from './useCategoriesCarouselConfig';

/**
 * Hook de alto nível que concentra a lógica da SectionCategorias:
 *  - Observa visibilidade (para animações)
 *  - Busca categorias (simulado)
 *  - Gerencia estados de loading / erro
 *  - Controla a dica de interação
 *  - Gera configuração do Swiper via hook dedicado
 */
export function useCategoriesSection() {
  // Visibilidade para animar cabeçalho/carrossel
  const [ref, visible] = useInView({ threshold: 0.15 });
  // Marca se usuário já interagiu (remove dica)
  const [hasInteracted, setHasInteracted] = useState(false);
  // Lista de categorias carregadas
  const [items, setItems] = useState([]);
  // Estado de carregamento
  const [loading, setLoading] = useState(true);
  // Mensagem de erro (se ocorrer)
  const [error, setError] = useState(null);

  // Fetch inicial (simulado)
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await fetchCategorias();
        if (active) setItems(data);
      } catch (e) {
        if (active) setError('Erro ao carregar categorias');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const onInteract = () => setHasInteracted(true);
  const swiperConfig = useCategoriesCarouselConfig({ onUserInteract: onInteract });

  return {
    ref,
    visible,
    hasInteracted,
    onInteract,
    items,
    loading,
    error,
    swiperConfig,
  };
}
