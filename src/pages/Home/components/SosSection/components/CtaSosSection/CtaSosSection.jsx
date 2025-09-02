import React from "react";

export default function CtaSosEmergencia() {
  return (
    <div className="w-full text-center mb-8">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl py-1 md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 mb-4 mt-4">
          ONGs que precisam da sua ajuda
        </h2>
      </div>
      <p
        className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-1"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Conheça algumas das ONGs que estão em situações de emergência
      </p>
    </div>
  );
}
