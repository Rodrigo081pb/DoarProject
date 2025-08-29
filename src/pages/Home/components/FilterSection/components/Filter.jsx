import React, { useEffect, useState } from 'react';
import BaseButton from '../../../../../components/BaseButton';

const Filter = () => {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  // Buscar estados ao montar
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(res => res.json())
      .then(data => {
        // Ordena por nome
        setEstados(data.sort((a, b) => a.nome.localeCompare(b.nome)));
      });
  }, []);

  // Buscar cidades quando um estado for selecionado
  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then(res => res.json())
        .then(data => {
          setCidades(data.sort((a, b) => a.nome.localeCompare(b.nome)));
          setCidadeSelecionada(''); // Limpa cidade ao trocar estado
        });
    } else {
      setCidades([]);
      setCidadeSelecionada('');
    }
  }, [estadoSelecionado]);

  return (
  <div className="w-full max-w-[94%] md:max-w-5xl bg-white rounded-2xl shadow-lg p-4 md:px-10 md:py-[38px] flex flex-col items-center mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Encontre uma causa para apoiar</h2>
  <div className="flex flex-col md:flex-row w-full gap-y-2 md:gap-y-0 md:gap-x-6 items-stretch justify-center">
        <select
          className={`border rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:w-80 shadow-sm bg-gray-100 ${!estadoSelecionado ? 'text-gray-400' : ''}`}
          value={estadoSelecionado}
          onChange={e => setEstadoSelecionado(e.target.value)}
        >
          <option value="" disabled>Selecione o estado</option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>
        <select
          className={`border rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:w-80 shadow-sm bg-gray-100 ${!estadoSelecionado ? 'text-gray-400' : ''}`}
          value={cidadeSelecionada}
          onChange={e => setCidadeSelecionada(e.target.value)}
          disabled={!estadoSelecionado}
        >
          <option value="" disabled>Cidade</option>
          {cidades.map(cidade => (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          ))}
        </select>
  <select className="border rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:w-80 shadow-sm bg-gray-100 text-gray-400" disabled>
          <option>Área de atuação</option>
        </select>
  <BaseButton size="md" variant="primary" className="flex items-center gap-2 md:w-80">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
    </svg>
    Buscar ONGs
  </BaseButton>
      </div>
    </div>
  );
};

export default Filter;