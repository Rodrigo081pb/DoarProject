import React from "react";

/**
 * Componente base para todos os botões do projeto.
 * Props:
 * - children: conteúdo do botão
 * - variant: "primary" | "secondary" | "outline" | "danger" (define cor)
 * - size: "sm" | "md" | "lg" (define tamanho)
 * - className: classes extras
 * - ...rest: outras props do botão
 */
const variantClasses = {
  primary: "bg-[#5F3DC4] hover:bg-[#4b2fa6] text-white",
  secondary: "bg-white hover:bg-gray-100 text-[#5F3DC4] border border-[#5F3DC4]",
  outline: "bg-transparent border border-[#5F3DC4] text-[#5F3DC4] hover:bg-[#5F3DC4] hover:text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const sizeClasses = {
  sm: "py-1 px-4 text-sm",
  md: "py-2 px-6 text-base",
  lg: "py-3 px-8 text-lg",
};

export default function BaseButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) {
  return (
    <button
      className={`font-semibold rounded-full shadow transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
      {...rest}
    >
      {children}
    </button>
  );
}
