import React from "react";

/**
 * Cabeçalho reutilizável da seção de categorias.
 * Recebe título e descrição para permitir customização em diferentes contextos.
 */
export function SectionHeader({ visible, title = "Explore Categorias", description = "Pesquise ONGs por área de atuação. Clique, arraste ou use as setas para navegar entre as categorias." }) {
  return (
    <div
      className={`transition-all duration-1000 ease-[cubic-bezier(.19,1,.22,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl py-1 md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 mb-4 mt-4">
          {title}
        </h2>
        <p className="text-slate-500 mb-10 max-w-2xl text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
