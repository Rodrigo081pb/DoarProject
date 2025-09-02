import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CtaSosEmergencia from "./components/CtaSosSection/CtaSosSection";
import CardOngs from "./components/CardOngs/CardOngsSection";
import BaseButton from '../../../../components/BaseButton';
import { useInView } from "../../../../hooks/useInView";


const cards = [
  {
    id: 1,
    categoria: "Alimentação",
    local: "São Paulo, SP",
    nome: "Ação Contra a Fome",
    descricao: "Combatendo a insegurança alimentar através de programas de distribuição de alimentos e capacitação profissional.",
    apoiadores: 1240,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
    whatsapp: "5511999999999",
  },
  {
    id: 2,
    categoria: "Educação",
    local: "Rio de Janeiro, RJ",
    nome: "Instituto Educação Para Todos",
    descricao: "Promovendo educação de qualidade e inclusão digital para crianças e jovens em situação de vulnerabilidade social.",
    apoiadores: 892,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
    whatsapp: "5521999999999",
  },
  {
    id: 3,
    categoria: "Animais",
    local: "São Paulo, SP",
    nome: "Proteção Animal São Paulo",
    descricao: "Resgatamos e cuidamos de animais abandonados, proporcionando cuidados médicos e um lar temporário.",
    apoiadores: 2156,
    imagem: "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
    whatsapp: "5511988888888",
  },
];

export default function EmergenciaSection() {
  const [sectionRef, isVisible] = useInView({ threshold: 0.2 });
  // Função para redirecionar para página de todas as ongs
  const handleVerTodas = () => {
    // Mocado: redireciona para uma rota fictícia
    window.location.href = '/ongs-emergencia';
  };
  return (
    <section
      ref={sectionRef}
      className={`py-12 px-4 sm:px-8 lg:px-20 mx-auto bg-[#f8f9fa] ${isVisible ? "animate-slide-in-blur-bottom" : "opacity-0"}`}
    >
      <CtaSosEmergencia />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mx-auto justify-center items-stretch px-4 md:px-8"
        style={{ maxWidth: '1100px' }}
      >
        {cards.map((card, idx) => (
          <CardOngs key={card.id} {...card} />
        ))}
      </div>
      <div className="flex justify-center mt-8 w-full">
        <BaseButton size="lg" variant="primary" onClick={handleVerTodas}>
          Ver todas as ongs que precisam de ajuda
        </BaseButton>
      </div>
    </section>
  );
}
