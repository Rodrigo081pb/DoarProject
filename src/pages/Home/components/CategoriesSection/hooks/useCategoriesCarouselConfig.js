import { Autoplay, FreeMode, Navigation } from "swiper/modules";

/**
 * Hook responsável por centralizar toda a configuração do Swiper
 * para o carrossel de categorias. Mantendo isso isolado fica
 * mais simples testar, reutilizar e evoluir (ex: trocar módulos,
 * mudar velocidade, adicionar acessibilidade) sem poluir o
 * componente principal.
 *
 * @param {Object} params
 * @param {Function} params.onUserInteract - Callback disparado em qualquer interação do usuário
 * @returns {Object} Configuração a ser espalhada no componente <Swiper />
 */
export function useCategoriesCarouselConfig({ onUserInteract }) {
  return {
    // Módulos Swiper necessários
    modules: [Autoplay, FreeMode, Navigation],
    // Quantidade base de slides visíveis (ajustada por breakpoints)
    slidesPerView: 1.2,
    // Espaçamento horizontal entre slides
    spaceBetween: 20,
    // Permite rolagem livre (sem snap estrito)
    freeMode: true,
    // Repetição infinita
    loop: true,
    // Duração da transição (ms)
    speed: 1400,
    // Config do autoplay (pausa ao hover e mantém após interação)
    autoplay: { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true },
    // Elementos externos de navegação (botões com classes)
    navigation: { prevEl: ".categories-prev", nextEl: ".categories-next" },
    // Muda cursor para "mão" indicando arrastável
    grabCursor: true,
    // Dispara marcação de interação (para esconder dica)
    onTouchStart: onUserInteract,
    onSliderFirstMove: onUserInteract,
    onClick: onUserInteract,
    // Breakpoints responsivos
    breakpoints: {
      480: { slidesPerView: 1.6 },
      640: { slidesPerView: 2.2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
    // Classes utilitárias extras
    className: "!pb-4 select-none overflow-visible",
  };
}
