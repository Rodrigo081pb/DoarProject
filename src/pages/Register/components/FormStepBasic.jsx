import React from "react";

export default function FormStepBasic({ form, errors, estados, handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-white font-medium">Nome da ONG</label>
        <input name="nome" value={form.nome} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nome da ONG" />
        {errors.nome && <span className="text-red-400 text-xs">{errors.nome}</span>}
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="isCnpj" checked={form.isCnpj} onChange={handleChange} className="accent-blue-500" />
        <span className="text-white text-sm">CNPJ?</span>
      </div>
      <div>
        <label className="text-white font-medium">{form.isCnpj ? "CNPJ" : "CPF"}</label>
        <input name="cpfCnpj" value={form.cpfCnpj} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder={form.isCnpj ? "00.000.000/0000-00" : "000.000.000-00"} maxLength={form.isCnpj ? 18 : 14} />
        {errors.cpfCnpj && <span className="text-red-400 text-xs">{errors.cpfCnpj}</span>}
      </div>
      <div>
        <label className="text-white font-medium">Estado</label>
        <select
          name="estado"
          value={form.estado}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>Selecione o estado</option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.sigla} style={{ color: '#111' }}>{estado.nome}</option>
          ))}
        </select>
        {errors.estado && <span className="text-red-400 text-xs">{errors.estado}</span>}
      </div>
      <div>
        <label className="text-white font-medium">CEP</label>
        <input name="cep" value={form.cep} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="CEP" maxLength={8} />
        {errors.cep && <span className="text-red-400 text-xs">{errors.cep}</span>}
      </div>
    </div>
  );
}
