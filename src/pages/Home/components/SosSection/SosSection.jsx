
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SosSectionHeader from "./components/SosSectionHeader";
import SosCard from "./components/SosCard";

const ongsUrgentes = [
  {
    nome: "ONG Viva Bicho",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    status: "Emergência",
    descricao: "Precisa urgentemente de ração e medicamentos para animais resgatados.",
    link: "https://wa.me/5500000000000"
  },
  {
    nome: "Ação Contra a Fome",
    img: "https://images.unsplash.com/photo-1606788075761-6ec2e048fbe0",
    status: "Necessidade Alta",
    descricao: "Faltam cestas básicas para famílias atingidas por enchentes.",
    link: "mailto:contato@acaocontrafome.org"
  },
  {
    nome: "Educa Mais",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    status: "Emergência",
    descricao: "Precisa de materiais escolares para crianças em situação de vulnerabilidade.",
    link: "https://wa.me/5500000000000"
  }
];

export default function SectionUrgencia() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SosSectionHeader />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {ongsUrgentes.map((ong, i) => (
            <SwiperSlide key={i}>
              <SosCard ong={ong} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
