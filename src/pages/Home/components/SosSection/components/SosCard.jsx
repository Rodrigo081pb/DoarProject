import React from "react";

export default function SosCard({ ong }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-sm flex flex-col overflow-hidden border border-slate-100 group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.025] w-full max-w-[305px] min-w-[224px] min-h-[370px] md:max-w-[336px] md:min-h-[400px] mx-auto">
      <div className="relative w-full overflow-hidden" style={{ height: 170, flexShrink: 0 }}>
        <img
          src={`${ong.img}?auto=format&fit=crop&w=800&q=80`}
          alt={ong.nome}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          style={{ height: 170 }}
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-red-200" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: 1 }}>
          {ong.status}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6 justify-between" style={{ flex: 1, minHeight: 0 }}>
        <h3 className="text-xl font-semibold text-slate-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{ong.nome}</h3>
        <p className="text-slate-600 text-base mb-4 flex-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{ong.descricao}</p>
        <a
          href={ong.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gradient-to-r from-red-600 via-orange-500 to-red-700 hover:from-orange-500 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 shadow-md"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ajudar Agora
        </a>
      </div>
    </div>
  );
}
