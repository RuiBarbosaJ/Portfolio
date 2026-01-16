"use client";

import { IoOpenOutline } from "react-icons/io5";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionA,
} from "@/components/ui/motion-wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function ProjectCarousel({
  images,
  title,
}: {
  images: { src: string; alt?: string }[];
  title: string;
}) {
  return (
    <div className="w-full lg:w-[340px]">
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="!w-full"
        >
          {images.map((img) => (
            <SwiperSlide key={img.src}>
              <img
                src={img.src}
                alt={img.alt ?? `Preview do projeto ${title}`}
                className="h-[190px] w-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

type Project = {
  title: string;
  description: string;
  where: string;
  github: string;
  technologies: string[];
  images: { src: string; alt?: string }[];
  testId: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Web Car (Aplicação de Formulários)",
      description:
        "Sistema web com navegação entre Home, Login, Cadastro, Dashboard, Dashboard (novo) e Detalhe do Carro, desenvolvido com foco em experiência do usuário. Utiliza React Hook Form + Zod para validações e Firebase para salvar dados e garantir consistência em todo o app.",
      where: "Projeto pessoal / estudos",
      github: "https://github.com/RuiBarbosaJ",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
        "Shadcn",
        "Firebase",
      ],
      images: [
        { src: "/img_projetos/web_car/home.png", alt: "Home" },
        { src: "/img_projetos/web_car/login.png", alt: "Login" },
        { src: "/img_projetos/web_car/cadastro.png", alt: "Cadastro" },
        { src: "/img_projetos/web_car/dashbord.png", alt: "Dashboard" },
        {
          src: "/img_projetos/web_car/dashbord-new.png",
          alt: "Dashboard (novo)",
        },
        {
          src: "/img_projetos/web_car/car-detail.png",
          alt: "Detalhe do carro",
        },
      ],
      testId: "card-project-webcar",
    },

    // ✅ NOVO PROJETO (DEV SHOP) - FICA ACIMA DO DEV CURRENCY
    {
      title: "Dev Shop (Carrinho de Compras)",
      description:
        "Mini e-commerce com vitrine de produtos, página de detalhes e carrinho completo. Permite adicionar itens com feedback (popup), exibe quantidade total no ícone do carrinho e realiza o cálculo automático de subtotal por produto e total geral, com controle de quantidade (+/−).",
      where: "Projeto pessoal / estudos",
      github: "https://github.com/RuiBarbosaJ",
      technologies: ["React", "TypeScript", "Context API"],
      images: [
        {
          src: "/img_projetos/carrinho_de_compras_simples/um.webp",
          alt: "Página principal",
        },
        {
          src: "/img_projetos/carrinho_de_compras_simples/dois.webp",
          alt: "Detalhes do produto",
        },
        {
          src: "/img_projetos/carrinho_de_compras_simples/tres.webp",
          alt: "Carrinho de compras",
        },
      ],
      testId: "card-project-devshop",
    },

    // ✅ DEV CURRENCY (AGORA 3º)
    {
      title: "DevCurrency (Criptomoedas)",
      description:
        "Aplicação em React + TypeScript consumindo API de criptomoedas, com busca por moeda e paginação (carregar mais). Exibe preço, valor de mercado, volume e variação em 24h em uma tabela, além de tela de detalhes por moeda.",
      where: "Projeto pessoal / estudos",
      github: "https://github.com/RuiBarbosaJ",
      technologies: ["React", "TypeScript", "API REST"],
      images: [
        { src: "/img_projetos/currency_cripto/um.png", alt: "Tabela + busca" },
        {
          src: "/img_projetos/currency_cripto/dois.png",
          alt: "Paginação / carregar mais",
        },
        {
          src: "/img_projetos/currency_cripto/tres.png",
          alt: "Tela de detalhes da moeda",
        },
      ],
      testId: "card-project-currency",
    },

    {
      title: "To Do List (HTML + CSS + JS)",
      description:
        "To-do list em HTML, CSS e JavaScript puro, com CRUD completo: adicionar, editar e salvar inline, remover itens e excluir todas as tarefas. Inclui marcação de conclusão (checkbox) e registro da data de criação, reforçando manipulação de DOM, eventos e lógica de listas no front-end.",
      where: "Projeto pessoal / estudos",
      github: "https://github.com/RuiBarbosaJ",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: [
        {
          src: "/img_projetos/to_do_list/um.webp",
          alt: "Tela principal do To Do List",
        },
      ],
      testId: "card-project-todolist",
    },

    {
      title: "Site de Restaurante (HTML + CSS + JS)",
      description:
        "Site de restaurante desenvolvido em HTML e CSS puro, com carrossel em JavaScript na página inicial. Possui seções de Sobre o restaurante, Eventos, Nosso cardápio e Fale conosco, criado para consolidar fundamentos de estrutura semântica, layout e estilização responsiva.",
      where: "Projeto pessoal / estudos",
      github: "https://github.com/RuiBarbosaJ",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: [
        { src: "/img_projetos/restaurante_web_cardápio/um.webp", alt: "Home" },
        {
          src: "/img_projetos/restaurante_web_cardápio/dois.webp",
          alt: "Eventos",
        },
        {
          src: "/img_projetos/restaurante_web_cardápio/tres.webp",
          alt: "Cardápio",
        },
        {
          src: "/img_projetos/restaurante_web_cardápio/quadro.webp",
          alt: "Contato",
        },
      ],
      testId: "card-project-restaurante",
    },
  ];

  return (
    <section
      id="projetos"
      className="bg-[#0A0A0A]"
      style={{ padding: "clamp(2.67rem, 5.33vw, 5.33rem) 0" }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 2rem)" }}
      >
        <MotionDiv
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <MotionP
            variants={fadeInUp}
            className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Portfólio
          </MotionP>

          <MotionH2
            variants={fadeInUp}
            className="text-white font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Projetos desenvolvidos
          </MotionH2>

          <MotionP
            variants={fadeInUp}
            className="text-white/50 max-w-2xl"
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Projetos criados com foco em{" "}
            <strong className="text-white font-medium">
              resolver problemas reais
            </strong>
            , aplicando conceitos de front-end e lógica de programação.
          </MotionP>

          <div style={{ marginTop: "2rem" }} className="space-y-3">
            {projects.map((project) => (
              <MotionA
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="block bg-[#111111] border border-white/10 rounded-2xl cursor-pointer group hover:border-white/20 transition-colors"
                style={{ padding: "1.5rem 2rem" }}
                data-testid={project.testId}
              >
                <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-white font-semibold group-hover:text-white/80 transition-colors duration-200"
                        style={{ fontSize: "1.125rem", lineHeight: 1.3 }}
                      >
                        {project.title}
                      </h3>
                      <IoOpenOutline className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>

                    <p
                      className="text-white/40"
                      style={{
                        marginTop: "0.5rem",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-3">
                      <span
                        className="text-xs font-medium bg-white/5 text-white/50 rounded-full border border-white/10"
                        style={{ padding: "0.375rem 0.75rem" }}
                      >
                        {project.where}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-white/5 text-white/50 rounded-full border border-white/10"
                          style={{ padding: "0.375rem 0.75rem" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionA>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
