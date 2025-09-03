import React from "react";

export default function FormStepSecurity({ form, errors, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, handleChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-white font-medium">Senha</label>
        <div className="relative">
          <input name="senha" type={showPassword ? "text" : "password"} value={form.senha} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" />
          <button type="button" className="absolute right-2 top-2 text-blue-400 p-1" onClick={() => setShowPassword((v) => !v)}>
            {showPassword ? (
              // Olho aberto
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F3DC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            ) : (
              // Olho fechado
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F3DC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.07 21.07 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/></svg>
            )}
          </button>
        </div>
        {errors.senha && <span className="text-red-400 text-xs">{errors.senha}</span>}
      </div>
      <div>
        <label className="text-white font-medium">Confirmar Senha</label>
        <div className="relative">
          <input name="confirmarSenha" type={showConfirmPassword ? "text" : "password"} value={form.confirmarSenha} onChange={handleChange} className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="********" />
          <button type="button" className="absolute right-2 top-2 text-blue-400 p-1" onClick={() => setShowConfirmPassword((v) => !v)}>
            {showConfirmPassword ? (
              // Olho aberto
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F3DC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            ) : (
              // Olho fechado
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F3DC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.07 21.07 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/></svg>
            )}
          </button>
        </div>
        {errors.confirmarSenha && <span className="text-red-400 text-xs">{errors.confirmarSenha}</span>}
      </div>
    </div>
  );
}
