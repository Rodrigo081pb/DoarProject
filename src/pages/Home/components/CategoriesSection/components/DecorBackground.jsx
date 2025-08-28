import React from "react";

/**
 * Elementos puramente decorativos da seção (gradientes circulares com blur).
 * Mantidos separados para não poluir o JSX principal e facilitar ajustes de design.
 */
export function DecorBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]">
      <div className="absolute -top-32 -left-24 h-80 w-80 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-200/10 rounded-full blur-3xl" />
    </div>
  );
}
