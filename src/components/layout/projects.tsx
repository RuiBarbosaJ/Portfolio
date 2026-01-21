"use client";

import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionA,
} from "@/components/ui/motion-wrapper";

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

type Project = {
  title: string;
  description: string;
  where: string;
  highlights: string[];
  demo?: string;
  github: string;
  technologies: string[];
  images: { src: string; alt?: string }[];
  testId: string;
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
              <Image
                src={img.src}
                alt={img.alt ?? `Preview do projeto ${title}`}
                width={340}
                height={190}
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

export function Projects() {
  const projects: Project[] = [
    {
      title: "Web Car (Compra e venda de carros)",
      description:
        "Sistema web com navegação entre Home, Login, Cadastro, Dashboard, Dashboard (novo) e Detalhe do Carro, desenvolvido com foco em experiência do usuário. Utiliza React Hook Form + Zod para validações e Firebase para salvar dados e garantir consistência em todo o app.",
      where: "Aplicação web",
      highlights: [
        "Fluxo completo com Home, Login, Cadastro, Dashboards e detalhes de carro",
        "Formulários com React Hook Form + Zod e feedback de erro em tempo real",
        "Persistência de dados no Firebase garantindo consistência entre telas",
      ],
      demo: "",
      github: "https://github.com/RuiBarbosaJ/web-car",
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
    {
      title: "DevCurrency (Analise de Criptomoedas)",
      description:
        "Aplicação em React + TypeScript consumindo API de criptomoedas, com busca por moeda e paginação (carregar mais). Exibe preço, valor de mercado, volume e variação em 24h em uma tabela, além de tela de detalhes por moeda.",
      where: "Aplicação web",
      highlights: [
        "Consumo de API de criptomoedas com listagem paginada",
        "Busca por moeda com filtro em tempo real",
        "Tela de detalhes com informações completas por ativo",
      ],
      demo: "",
      github: "https://github.com/RuiBarbosaJ/CurrencyCripto",
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
      title: "Site para Restaurante (com cardápio)",
      description:
        "Site de restaurante desenvolvido em HTML e CSS puro, com carrossel em JavaScript na página inicial. Possui seções de Sobre o restaurante, Eventos, Nosso cardápio e Fale conosco, criado para consolidar fundamentos de estrutura semântica, layout e estilização responsiva.",
      where: "Site institucional",
      highlights: [
        "Landing page com seções de apresentação, eventos, cardápio e contato",
        "Carrossel em JavaScript na página inicial",
        "Layout responsivo com foco em semântica e leitura",
      ],
      demo: "",
      github: "https://github.com/RuiBarbosaJ/RestauranteWEB-Cardapio",
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
      id="experiencia-educacao"
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
            Experiência & Educação
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
            Experiência & Educação
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
            Minha jornada acadêmica e profissional, incluindo formação técnica e
            experiência prática em desenvolvimento.
          </MotionP>

          {/* ====== EDUCAÇÃO ====== */}
          <MotionDiv
            variants={fadeInUp}
            className="bg-[#111111] border border-white/10 rounded-2xl"
            style={{ padding: "1.25rem 1.5rem", marginTop: "2rem" }}
          >
            <h3 className="text-white font-semibold mb-3">Educação</h3>

            <p
              className="text-white/70"
              style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
            >
              <strong className="text-white font-medium">
                Bacharelado em Sistemas de Informação
              </strong>{" "}
              - Início previsto para 2026.
            </p>

            <p
              className="text-white/70 mt-2"
              style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
            >
              <strong className="text-white font-medium">
                Formação Desenvolvedor Full Stack Python
              </strong>{" "}
              – Curso profissionalizante - EBAC – Escola Britânica de Artes
              Criativas e Tecnologia – Início: 12/23 – Fim: 06/24.
            </p>
          </MotionDiv>

          {/* ====== BLOCO "ATUALMENTE" (EXPERIÊNCIA NA KLEIMP) ====== */}
          <MotionDiv
            variants={fadeInUp}
            className="bg-[#111111] border border-white/10 rounded-2xl"
            style={{ padding: "1.25rem 1.5rem", marginTop: "2rem" }}
          >
            <h3 className="text-white font-semibold mb-3">
              Experiência Profissional
            </h3>

            <p
              className="text-white/70"
              style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
            >
              <strong className="text-white font-medium">Atualmente</strong>,
              atuo no desenvolvimento de{" "}
              <strong className="text-white font-medium">
                módulos administrativos
              </strong>{" "}
              no projeto da{" "}
              <strong className="text-white font-medium">Kleimp</strong>,
              utilizando{" "}
              <strong className="text-white font-medium">
                React, Next.js, TypeScript e Tailwind CSS
              </strong>{" "}
              para garantir uma aplicação escalável e com tipagem forte. Também
              implementei{" "}
              <strong className="text-white font-medium">
                módulo de auditoria
              </strong>{" "}
              (logs e históricos de ações) e{" "}
              <strong className="text-white font-medium">
                gestão de acessos
              </strong>{" "}
              (telas e fluxos de Usuários e Perfis), com foco em interfaces
              responsivas, consistência visual e{" "}
              <strong className="text-white font-medium">
                organização de código com Git/GitHub
              </strong>
              .
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "ShadCN UI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium bg-white/5 text-white/50 rounded-full border border-white/10"
                  style={{ padding: "0.375rem 0.75rem" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionDiv>

          {/* ====== PROJETOS RELEVANTES ====== */}
          <MotionH2
            variants={fadeInUp}
            className="text-white font-bold mt-8"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Projetos Relevantes
          </MotionH2>

          <MotionP
            variants={fadeInUp}
            className="text-white/50 max-w-2xl"
            style={{
              marginTop: "0.5rem",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Seleção de projetos onde aplico front-end para{" "}
            <strong className="text-white font-medium">entregar valor</strong>:
            telas bem acabadas, validações confiáveis e experiência clara para o
            usuário.
          </MotionP>

          {/* ====== LISTA DE PROJETOS ====== */}
          <div style={{ marginTop: "1.25rem" }} className="space-y-3">
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

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1 text-white/60 text-sm list-disc list-inside">
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-3">
                      <span
                        className="text-xs font-medium bg-white/5 text-white/50 rounded-full border border-white/10"
                        style={{ padding: "0.375rem 0.75rem" }}
                      >
                        {project.where}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                      {project.demo && project.demo.trim().length > 0 && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white/70 hover:text-white"
                        >
                          <span>Ver demo</span>
                          <IoOpenOutline className="w-4 h-4" />
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/70 hover:text-white"
                      >
                        <span>Ver código no GitHub</span>
                        <IoOpenOutline className="w-4 h-4" />
                      </a>
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
