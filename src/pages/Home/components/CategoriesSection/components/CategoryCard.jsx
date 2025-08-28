import React, { useState } from "react";

// SVG placeholder (data URI) caso a imagem não exista ou falhe o carregamento.
// Data URI evita outra requisição de rede.
const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<?xml version='1.0' encoding='UTF-8'?>\n<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'>\n  <defs>\n    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>\n      <stop stop-color='%23d1d5db' offset='0%'/>\n      <stop stop-color='%23f1f5f9' offset='100%'/>\n    </linearGradient>\n  </defs>\n  <rect width='400' height='300' fill='url(%23g)' rx='16'/>\n  <g fill='%23637485' font-family='Arial,sans-serif' font-size='20' text-anchor='middle'>\n    <text x='200' y='150'>Sem imagem</text>\n  </g>\n</svg>`);

/**
 * Card individual de categoria.
 * Mostra imagem, contagem de ONGs e nome. Links levam a uma rota de busca filtrada.
 */
export default function CategoryCard({ categoria }) {
  const [src, setSrc] = useState(categoria.img || PLACEHOLDER_IMG);
  return (
    <a
      href={`/buscar?tipo=${encodeURIComponent(categoria.nome)}`}
      aria-label={`Buscar ONGs da categoria ${categoria.nome}`}
      className="group relative block rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={src}
          alt={categoria.nome}
          loading="lazy"
          // Fallback para placeholder caso a imagem real quebre
          onError={() => setSrc(PLACEHOLDER_IMG)}
          className="h-full w-full object-cover transition duration-[1600ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110 group-hover:rotate-[1.5deg]"
        />
        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-90 pointer-events-none" />
        {/* Badge com número de ONGs da categoria */}
        <div className="absolute top-2 left-2 px-3 py-1 text-[11px] uppercase tracking-wide font-semibold rounded-full bg-blue-600/90 text-white shadow">{categoria.total} ONGs</div>
      </div>
      <div className="p-4 flex items-center gap-2">
        <span className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{categoria.nome}</span>
        <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
      </div>
      {/* Efeito sutil ao hover para dar profundidade */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/30 pointer-events-none" />
    </a>
  );
}
