import React from "react";

export default function FormStepContact({ form, errors, handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-white font-medium">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="email@exemplo.com" />
        {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
      </div>
      <div>
        <label className="text-white font-medium">Telefone</label>
        <input name="telefone" value={form.telefone} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="(99) 99999-9999" />
        {errors.telefone && <span className="text-red-400 text-xs">{errors.telefone}</span>}
      </div>
    </div>
  );
}
