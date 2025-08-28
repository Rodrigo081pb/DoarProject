import React from "react";

const RegisterButton = () => {
    return (
        <a
            href="/ong/cadastrar"
            className="bg-green-500 hover:bg-green-600 text-slate-900 font-semibold px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-105"
        >
            Cadastrar minha ONG
        </a>
    )
}

export default RegisterButton;