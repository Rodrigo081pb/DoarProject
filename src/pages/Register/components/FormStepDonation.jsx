import React from "react";

export default function FormStepDonation({ form, errors, tiposDoacaoList, handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-white font-medium">Tipos de doação</label>
      <div className="flex flex-wrap gap-2">
        {tiposDoacaoList.map((tipo) => (
          <label key={tipo} className="flex items-center gap-2 text-white bg-blue-500/20 px-3 py-1 rounded-full cursor-pointer">
            <input type="checkbox" name="tiposDoacao" value={tipo} checked={form.tiposDoacao.includes(tipo)} onChange={handleChange} className="accent-blue-500" />
            {tipo}
          </label>
        ))}
      </div>
      {errors.tiposDoacao && <span className="text-red-400 text-xs">{errors.tiposDoacao}</span>}
    </div>
  );
}
