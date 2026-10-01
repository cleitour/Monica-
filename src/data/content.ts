export interface ServiceArea {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const PROFESSIONAL_INFO = {
  name: "Mônica Azevedo",
  title: "Saúde Emocional & Comportamento",
  specialty: "Especialista em Neuropsicologia",
  crp: "CRP 05/60360",
  tagline: "Cuidar da mente também é uma forma de cuidar da vida.",
  logoUrl: "https://i.postimg.cc/BnZzTscb/IMG-7244.jpg",
  heroImageUrl: "/images/monica_azevedo_hero.webp",
  heroImagePngUrl: "/images/monica_azevedo_hero.png",
  heroOriginalUrl: "https://i.postimg.cc/bJQdf4V8/IMG-7247.jpg",
  heroCoverOriginalUrl: "https://i.postimg.cc/9Qwrm4rC/IMG-7249.jpg",
  heroCoverWebp: "/images/hero_cover.webp",
  heroCoverJpg: "/images/hero_cover.jpg",
  aboutPhotoUrl: "https://i.postimg.cc/FRYF9zrS/IMG-7251.jpg",
  bookCoverUrl: "https://i.postimg.cc/3J2yXQJG/IMG-7246.webp",
  whatsappUrl: "https://wa.link/n4h8m1",
  instagramUrl: "https://www.instagram.com/psicologa.monicazevedo?stkn=d2ZjMzZjNnpsOWc4",
  youtubeUrl: "https://www.youtube.com/live/1IlzE0Fv5JY?si=e2zbAG9vPpWr4SPM",
  youtubeVideoId: "1IlzE0Fv5JY",
  address: {
    street: "Av. Joaquim da Costa Lima, 15100",
    room: "Sala 105 - Lote XV",
    district: "Lote XV",
    city: "Belford Roxo",
    state: "RJ",
    zip: "26112-055",
    country: "Brasil",
    full: "Av. Joaquim da Costa Lima, 15100 - Sala 105 - Lote XV, Belford Roxo - RJ, 26112-055, Brasil",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Joaquim+da+Costa+Lima,+15100+-+Sala+105+-+Lote+XV,+Belford+Roxo+-+RJ,+26112-055,+Brasil"
  }
};

export const SERVICES_LIST: ServiceArea[] = [
  {
    id: "neuropsicologia",
    icon: "🧠",
    title: "Neuropsicologia",
    subtitle: "Funcionamento Cognitivo & Comportamental",
    description: "Avaliação e compreensão minuciosa de aspectos relacionados ao funcionamento cognitivo e comportamental, correlacionando os processos cerebrais com a conduta humana.",
    highlights: ["Mapeamento de funções cognitivas", "Compreensão comportamental integrada", "Rigor ético e científico"]
  },
  {
    id: "avaliacao-neuropsicologica",
    icon: "🧩",
    title: "Avaliação Neuropsicológica",
    subtitle: "Investigação Clínica Especializada",
    description: "Área destinada à investigação das funções cognitivas, comportamentais e emocionais através de instrumentos e protocolos validados tecnicamente.",
    highlights: ["Atenção, memória e funções executivas", "Perfil de potencialidades e dificuldades", "Laudo técnico estruturado"]
  },
  {
    id: "tcc",
    icon: "💬",
    title: "TCC",
    subtitle: "Terapia Cognitivo-Comportamental",
    description: "Abordagem da Terapia Cognitivo-Comportamental, com foco na relação entre pensamentos, emoções e comportamentos, promovendo autoconhecimento e estratégias práticas.",
    highlights: ["Abordagem baseada em evidências", "Identificação de padrões cognitivos", "Desenvolvimento de estratégias de regulação"]
  },
  {
    id: "tea",
    icon: "🧩",
    title: "TEA",
    subtitle: "Transtorno do Espectro Autista",
    description: "Atuação e olhar clínico especializado relacionado ao Transtorno do Espectro Autista, priorizando a individualidade, acolhimento às famílias e suporte adaptativo.",
    highlights: ["Compreensão do perfil neurodivergente", "Acolhimento humanizado", "Orientação às etapas de desenvolvimento"]
  },
  {
    id: "tdah",
    icon: "⚡",
    title: "TDAH",
    subtitle: "Déficit de Atenção & Hiperatividade",
    description: "Atuação relacionada ao Transtorno do Déficit de Atenção e Hiperatividade, auxiliando na compreensão das funções executivas, foco, planejamento e regulação diária.",
    highlights: ["Avaliação do impacto funcional", "Manejo da rotina e impulsividade", "Estratégias para autonomia"]
  }
];

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Livro", href: "#livro" },
  { label: "Entrevista", href: "#entrevista" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
