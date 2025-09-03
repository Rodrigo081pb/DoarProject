
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/logo/Logo";


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/esqueceu-senha");
  };

  return (
    <>
      <div className="mt-4 w-full flex justify-center items-center mb-4">
        <Logo />
      </div>
      <form className="flex flex-col gap-4 w-full max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl mt-2 font-bold text-white mb-6 text-center">Login</h1>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@mail.com"
            className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Senha</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="**************"
            className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-8 text-white focus:outline-none"
            tabIndex={-1}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.001 12c2.25 4.5 6.75 7.5 12 7.5 2.042 0 3.98-.41 5.73-1.223M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6.02-3.777A10.477 10.477 0 0 1 21.999 12c-2.25 4.5-6.75 7.5-12 7.5a10.477 10.477 0 0 1-5.73-1.223" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.5 6 7.5 9.75 7.5S21.75 16.5 21.75 12c0-4.5-6-7.5-9.75-7.5S2.25 7.5 2.25 12Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center justify-between text-white text-xs">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Lembrar-me
          </label>
          <a href="#" className="hover:underline" onClick={handleForgotPassword}>Esqueceu a senha?</a>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition">Entrar</button>
          <button type="button" onClick={handleRegister} className="flex-1 border border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-500 transition">Cadastrar</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
