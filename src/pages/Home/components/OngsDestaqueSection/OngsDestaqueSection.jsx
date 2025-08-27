import React from "react";
import CtaOngsDestaque from "./components/CtaSectionDestaque/CtaOngsDestaque";
import CardOngs from "./components/CardOngs/CardOngs";
import ButtonAllOngs from "./components/ButtonAllOngs/ButtonAllOngs";


const cards = [
  {
    categoria: "Alimentação",
    local: "São Paulo, SP",
    nome: "Ação Contra a Fome",
    descricao: "Combatendo a insegurança alimentar através de programas de distribuição de alimentos e capacitação profissional.",
    apoiadores: 1240,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
  },
  {
    categoria: "Educação",
    local: "Rio de Janeiro, RJ",
    nome: "Instituto Educação Para Todos",
    descricao: "Promovendo educação de qualidade e inclusão digital para crianças e jovens em situação de vulnerabilidade social.",
    apoiadores: 892,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
  },
  {
    categoria: "Animais",
    local: "São Paulo, SP",
    nome: "Proteção Animal São Paulo",
    descricao: "Resgatamos e cuidamos de animais abandonados, proporcionando cuidados médicos e um lar temporário.",
    apoiadores: 2156,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
  },
];

export default function OngsDestaqueSection() {
  return (
  <section className="py-12 px-4 sm:px-8 lg:px-20 mx-auto bg-[#f8f9fa]">
      <CtaOngsDestaque />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mx-auto justify-center items-stretch px-4 md:px-8"
        style={{ maxWidth: '1100px' }}
      >
        {cards.map((card, idx) => (
          <CardOngs key={idx} {...card} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ButtonAllOngs />
      </div>
    </section>
  );
}
