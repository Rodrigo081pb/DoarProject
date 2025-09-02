
import React from "react";
import groupIcon from "./imgs/icons/group.png";

export default function CardOngs({ categoria, local, nome, descricao, apoiadores, imagem }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden border border-gray-100 card-ongs group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.025] w-full max-w-[340px] min-w-[180px] min-h-[340px] sm:min-h-[370px] md:max-w-[360px] md:min-h-[400px] mx-auto"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: 120, flexShrink: 0 }}>
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-90"
          style={{ height: 120, minHeight: 100, maxHeight: 160 }}
        />
        <span
          className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-gray-200"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {categoria}
        </span>
      </div>
      <div
        className="flex flex-col flex-1 p-4 sm:p-6 justify-between"
        style={{ flex: 1, minHeight: 0 }}
      >
        <div className="flex items-center text-gray-500 text-sm mb-2 gap-1">
          <span>{local}</span>
        </div>
        <h3
          className="text-lg sm:text-xl font-semibold text-gray-900 mb-1"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {nome}
        </h3>
        <p
          className="text-gray-600 text-sm sm:text-base mb-4 flex-1"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {descricao}
        </p>
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-2 gap-2 sm:gap-0">
          <div className="flex items-center text-gray-500 text-sm gap-1">
            <img src={groupIcon} alt="Apoiadores" className="h-5 w-5 inline-block" />
            <span>{apoiadores} apoiadores</span>
          </div>
          <a
            href="#"
            className="text-purple-700 font-semibold hover:underline text-sm flex items-center gap-1"
          >
            Ver mais <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
