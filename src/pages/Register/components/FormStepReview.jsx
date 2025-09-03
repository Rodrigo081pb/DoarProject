import React from "react";

export default function FormStepReview({ form, tiposDoacaoList }) {
  return (
    <div className="flex flex-col gap-4 text-white">
      <h2 className="text-lg font-semibold">Revisar dados</h2>
      <div><b>Nome:</b> {form.nome}</div>
      <div><b>{form.isCnpj ? "CNPJ" : "CPF"}:</b> {form.cpfCnpj}</div>
      <div><b>Estado:</b> {form.estado}</div>
      <div><b>CEP:</b> {form.cep}</div>
      <div><b>Email:</b> {form.email}</div>
      <div><b>Telefone:</b> {form.telefone}</div>
      <div><b>Tipos de doação:</b> {form.tiposDoacao.join(", ")}</div>
      <div className="text-xs text-yellow-200 mt-2">Após enviar, seu cadastro será analisado e você receberá um email de confirmação.</div>
    </div>
  );
}
