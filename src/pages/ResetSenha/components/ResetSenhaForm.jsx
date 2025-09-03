import React, { useState } from "react";

const ResetSenhaForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    // Simulação de troca de senha
    setSuccess(true);
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center  text-purple-600">Redefinir Senha</h2>
      {success ? (
        <div className="text-green-600 text-center">
          Senha redefinida com sucesso! Você já pode fazer login.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Nova Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite a nova senha"
            required
          />
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirmar Nova Senha</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Confirme a nova senha"
            required
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Redefinir Senha
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetSenhaForm;
