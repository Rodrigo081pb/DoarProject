import React from "react";

const WelcomeSection = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <h1 className="text-4xl font-bold text-white mb-4 text-center">Esqueceu sua senha?</h1>
    <p className="text-lg text-white text-center max-w-md">
      Não se preocupe! Informe seu e-mail cadastrado e enviaremos um link para você redefinir sua senha.
    </p>
  </div>
);

export default WelcomeSection;
