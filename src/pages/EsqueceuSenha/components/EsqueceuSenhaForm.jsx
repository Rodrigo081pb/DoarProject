import React, { useState } from "react";

const EsqueceuSenhaForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Simulação de envio
    if (email.includes("@")) {
      setSuccess(true);
    } else {
      setError("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-white-700">Recuperar Senha</h2>
      {success ? (
        <div className="text-green-600 text-center">
          Um link de recuperação foi enviado para seu e-mail!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite seu e-mail"
            required
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar link de recuperação
          </button>
        </form>
      )}
    </div>
  );
};

export default EsqueceuSenhaForm;
