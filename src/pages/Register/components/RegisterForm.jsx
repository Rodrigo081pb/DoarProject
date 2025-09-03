
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseButton from "../../../components/BaseButton";
import Logo from "../../../components/logo/Logo";
import FormStepBasic from "./FormStepBasic";
import FormStepContact from "./FormStepContact";
import FormStepSecurity from "./FormStepSecurity";
import FormStepDonation from "./FormStepDonation";
import FormStepReview from "./FormStepReview";

const tiposDoacaoList = [
    "Alimentos",
    "Roupas",
    "Animais",
    "Materiais escolares",
    "Recicláveis",
    "Outros"
];

function maskCpfCnpj(value, isCnpj) {
    if (isCnpj) {
        // CNPJ: 00.000.000/0000-00
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .slice(0, 18);
    } else {
        // CPF: 000.000.000-00
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1-$2")
            .slice(0, 14);
    }
}

const initialForm = {
    nome: "",
    cpfCnpj: "",
    isCnpj: false,
    estado: "",
    cep: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    tiposDoacao: [],
};

const steps = ["Dados Básicos", "Contato", "Segurança", "Tipos de Doação", "Revisão"];

const RegisterForm = () => {
    const [form, setForm] = useState(initialForm);
    const [step, setStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [estados, setEstados] = useState([]);
    const navigate = useNavigate();

    // Busca estados do IBGE ao montar
    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(data => {
                setEstados(data.sort((a, b) => a.nome.localeCompare(b.nome)));
            });
    }, []);

    // Validação simples
    function validateStep() {
        const err = {};
        if (step === 0) {
            if (!form.nome || form.nome.length < 3) err.nome = "Nome da ONG deve ter ao menos 3 caracteres.";
            if (!form.cpfCnpj) err.cpfCnpj = form.isCnpj ? "CNPJ obrigatório." : "CPF obrigatório.";
            if (!form.estado) err.estado = "Estado obrigatório.";
            if (!form.cep || form.cep.length < 8) err.cep = "CEP inválido.";
        }
        if (step === 1) {
            if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Email inválido.";
            if (!form.telefone || form.telefone.length < 9) err.telefone = "Telefone inválido.";
        }
        if (step === 2) {
            if (!form.senha || !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(form.senha)) err.senha = "Senha fraca. Use letras maiúsculas, minúsculas, números e símbolos.";
            if (form.senha !== form.confirmarSenha) err.confirmarSenha = "Senhas não coincidem.";
        }
        if (step === 3) {
            if (!form.tiposDoacao.length) err.tiposDoacao = "Selecione ao menos um tipo de doação.";
        }
        setErrors(err);
        return Object.keys(err).length === 0;
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (name === "isCnpj") {
            setForm({ ...form, isCnpj: checked, cpfCnpj: "" });
            return;
        }
        if (name === "cpfCnpj") {
            setForm({ ...form, cpfCnpj: maskCpfCnpj(value, form.isCnpj) });
            return;
        }
        if (name === "tiposDoacao") {
            let tipos = [...form.tiposDoacao];
            if (checked) tipos.push(value);
            else tipos = tipos.filter((t) => t !== value);
            setForm({ ...form, tiposDoacao: tipos });
            return;
        }
        setForm({ ...form, [name]: value });
    }

    function handleNext(e) {
        e.preventDefault();
        if (validateStep()) setStep((s) => Math.min(s + 1, steps.length - 1));
    }
    function handlePrev(e) {
        e.preventDefault();
        setStep((s) => Math.max(s - 1, 0));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (validateStep()) {
            alert("Cadastro enviado para análise! Você receberá um email após a validação.");
            setForm(initialForm);
            setStep(0);
            navigate("/");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-300 to-blue-600">
            <form className="w-full max-w-md mx-auto p-8 bg-white bg-opacity-10 rounded-xl shadow-lg flex flex-col gap-6 animate-fade-in backdrop-blur-md" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center gap-2">
                    <Logo />
                    <h1 className="text-2xl font-bold text-white">Cadastro de ONG</h1>
                    <div className="flex gap-2 mt-2">
                        {steps.map((label, idx) => (
                            <div key={label} className={`h-2 w-8 rounded-full ${step >= idx ? "bg-blue-500" : "bg-white/30"}`}></div>
                        ))}
                    </div>
                </div>

                {/* Step 1: Dados Básicos */}
                {step === 0 && (
                    <FormStepBasic form={form} errors={errors} estados={estados} handleChange={handleChange} />
                )}

                {/* Step 2: Contato */}
                {step === 1 && (
                    <FormStepContact form={form} errors={errors} handleChange={handleChange} />
                )}

                {/* Step 3: Segurança */}
                {step === 2 && (
                    <FormStepSecurity
                        form={form}
                        errors={errors}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        showConfirmPassword={showConfirmPassword}
                        setShowConfirmPassword={setShowConfirmPassword}
                        handleChange={handleChange}
                    />
                )}

                {/* Step 4: Tipos de Doação */}
                {step === 3 && (
                    <FormStepDonation form={form} errors={errors} tiposDoacaoList={tiposDoacaoList} handleChange={handleChange} />
                )}

                {/* Step 5: Revisão */}
                {step === 4 && (
                    <FormStepReview form={form} tiposDoacaoList={tiposDoacaoList} />
                )}

                {/* Botões de navegação */}
                <div className="flex gap-4 mt-4">
                    {step > 0 && (
                        <BaseButton type="button" variant="outline" size="md" onClick={handlePrev}>Voltar</BaseButton>
                    )}
                    {step < steps.length - 1 && (
                        <BaseButton type="button" variant="primary" size="md" onClick={handleNext}>Próximo</BaseButton>
                    )}
                    {step === steps.length - 1 && (
                        <BaseButton type="submit" variant="primary" size="md">Enviar</BaseButton>
                    )}
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
