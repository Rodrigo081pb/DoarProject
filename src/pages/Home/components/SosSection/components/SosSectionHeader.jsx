import React from "react";

export default function SosSectionHeader() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-900 mb-8 mt-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        🚨 ONGs em Estado de Emergência
      </h2>
      <p className="text-base md:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Ajude organizações que precisam de apoio imediato. Sua contribuição faz a diferença em situações críticas!
      </p>
    </>
  );
}
