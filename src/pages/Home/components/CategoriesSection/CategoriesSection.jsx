import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import CategoryCard from "./components/CategoryCard";
import { SectionHeader } from "./components/SectionHeader";
import { NavigationButtons } from "./components/NavigationButtons";
import { DecorBackground } from "./components/DecorBackground";
import { useCategoriesSection } from "./hooks/useCategoriesSection";

/**
 * Responsável por:
 *  - Observar visibilidade para animar entrada (useInView)
 *  - Buscar dados (simulado) e gerenciar estados loading/erro
 *  - Configurar o carrossel via hook dedicado
 *  - Mostrar dica de interação até o primeiro input do usuário
 */
export default function SectionCategorias({ title, description }) {
    // Hook consolidado com toda a lógica da seção
    const { ref, visible, hasInteracted, items, loading, error, swiperConfig } = useCategoriesSection();

    return (
        <section ref={ref} className="relative py-16 bg-slate-50 overflow-x-hidden">
            <DecorBackground />
            <div className="relative max-w-7xl mx-auto px-4">
                {/* Cabeçalho animado (recebe props dinâmicas) */}
                <SectionHeader visible={visible} title={title} description={description} />
                <div className={`relative transition-opacity duration-1000 delay-150 ${visible ? "opacity-100" : "opacity-0"}`}>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />
                    {/* Botões externos de navegação + dica condicional */}
                    <NavigationButtons />
                    {error && (
                        <div className="text-sm text-red-600 py-4">{error}</div>
                    )}
                    {/* Carrossel principal */}
                    <Swiper {...swiperConfig}>
                        {/* Skeletons enquanto carrega */}
                        {loading && !items.length && Array.from({ length: 5 }).map((_, i) => (
                            <SwiperSlide key={i} className="h-auto">
                                <div className="animate-pulse h-44 w-full rounded-2xl bg-slate-200" />
                            </SwiperSlide>
                        ))}
                        {/* Slides reais após carregamento */}
                        {!loading && items.map((c) => (
                            <SwiperSlide key={c.nome} className="h-auto">
                                <CategoryCard categoria={c} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
