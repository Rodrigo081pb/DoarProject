
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoInformationCircleSharp } from 'react-icons/io5';

export default function CardOngs({ id, categoria, local, nome, descricao, apoiadores, imagem, whatsapp }) {
    // Função para abrir WhatsApp da ONG
    const handleDoeAgora = () => {
        // Mocado: link direto para WhatsApp com mensagem padrão
        window.open(`https://wa.me/${whatsapp}?text=Olá!%20Quero%20ajudar%20a%20ONG%20${encodeURIComponent(nome)}`, '_blank');
    };
    // Função para ir ao perfil da ONG (mocado)
    const handleSaibaMais = () => {
        window.location.href = `/perfil-ong/${id}`;
    };
    return (
        <div
            className="relative rounded-3xl flex flex-col overflow-hidden card-ongs group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] w-full max-w-[320px] min-w-[224px] min-h-[370px] md:max-w-[350px] md:min-h-[400px] border border-gray-200/60 bg-white/60 backdrop-blur-lg"
            style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 24px 0 rgba(80, 80, 120, 0.10)',
                border: '1.5px solid rgba(180,180,200,0.18)',
            }}
        >
            <div className="relative w-full overflow-hidden" style={{ height: 120, flexShrink: 0 }}>
                <img
                    src={imagem}
                    alt={nome}
                    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-95"
                    style={{ height: 120 }}
                />
                <span
                    className="absolute top-3 left-3 bg-white/70 text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow border border-gray-200/60 backdrop-blur-sm"
                    style={{ fontFamily: "Poppins, sans-serif", letterSpacing: 0.2 }}
                >
                    {categoria}
                </span>
            </div>
            <div
                className="flex flex-col flex-1 p-6 justify-between"
                style={{ flex: 1, minHeight: 0 }}
            >
                <div className="flex items-center text-gray-400 text-xs mb-2 gap-1 tracking-wide">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-300 rounded-full mr-2"></span>
                    <span>{local}</span>
                </div>
                <h3
                    className="text-lg font-semibold text-gray-900 mb-1 tracking-tight"
                    style={{ fontFamily: "Poppins, sans-serif", letterSpacing: 0.1 }}
                >
                    {nome}
                </h3>
                <p
                    className="text-gray-600 text-sm mb-5 flex-1 line-clamp-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    {descricao}
                </p>
                <div className="flex justify-center mt-2">
                    <button
                        onClick={handleDoeAgora}
                        className="bg-purple-700/90 hover:bg-purple-800/90 active:bg-purple-900/90 text-white font-medium py-2 px-6 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm tracking-wide flex items-center gap-2 group/button"
                    >
                        <span className="transition-transform duration-200 group-hover/button:-translate-y-0.5"><FaHandHoldingHeart className="text-base opacity-80" /></span>
                        Doe agora
                    </button>
                </div>
                <div className="flex justify-center mt-2">
                    <button
                        onClick={handleSaibaMais}
                        className="bg-purple-700/90 hover:bg-purple-800/90 active:bg-purple-900/90 text-white font-medium py-2 px-6 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm tracking-wide flex items-center gap-2 group/button"
                    >
                        <span className="transition-transform duration-200 group-hover/button:-translate-y-0.5">
                        <IoInformationCircleSharp className="text-base opacity-80" /></span>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>
    );
}