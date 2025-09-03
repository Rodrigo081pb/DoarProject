import React from "react";
import Logo from "../../../components/logo/Logo";

const LoginForm = () => {
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
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**************"
            className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center justify-between text-white text-xs">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Lembrar-me
          </label>
          <a href="#" className="hover:underline">Esqueceu a senha?</a>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition">Entrar</button>
          <button type="button" className="flex-1 border border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-500 transition">Cadastrar</button>
        </div>

      </form>
    </>
  );
};

export default LoginForm;
