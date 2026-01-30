"use client";

import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion-wrapper";
import { CheckCircle, Database, Lock, FileText } from "lucide-react";

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

export function Projects() {
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
            className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
            style={{ padding: "2rem", marginTop: "2rem" }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <FileText className="w-5 h-5 text-white/50" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Educação
                </h3>

                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                      <div>
                        <p
                          className="text-white font-medium"
                          style={{ fontSize: "0.95rem" }}
                        >
                          Bacharelado em Sistemas de Informação
                        </p>
                        <p
                          className="text-white/50 mt-1"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Início previsto para 2026
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                      <div>
                        <p
                          className="text-white font-medium"
                          style={{ fontSize: "0.95rem" }}
                        >
                          Formação Desenvolvedor Full Stack
                        </p>
                        <p
                          className="text-white/50 mt-1"
                          style={{ fontSize: "0.9rem" }}
                        >
                          EBAC – Escola Britânica de Artes Criativas e
                          Tecnologia
                        </p>
                        <p
                          className="text-white/40 mt-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Dezembro 2023 - Junho 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* ====== BLOCO "ATUALMENTE" (EXPERIÊNCIA NA KLEIMP) ====== */}
          <MotionDiv
            variants={fadeInUp}
            className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
            style={{ padding: "2rem", marginTop: "2rem" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1">
                <Database className="w-5 h-5 text-blue-400/70" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Experiência Profissional
                </h3>
                <p className="text-white/40 text-sm mt-1">Kleimp</p>
              </div>
            </div>

            <div className="space-y-4 text-white/70">
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                <span className="text-blue-400/70">●</span> Desenvolvimento de
                <span className="text-white font-medium">
                  {" "}
                  módulos completos
                </span>
                , consumindo APIs REST para gerenciamento de usuários, perfis e
                permissões, garantindo tipagem forte e organização escalável da
                aplicação.
              </p>
            </div>

            {/* SEÇÃO: Fluxos Implementados */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-4 h-4 text-green-400/70 mt-1 shrink-0" />
                <h4 className="text-white font-medium">Fluxos Implementados</h4>
              </div>
              <ul className="space-y-2 ml-7 text-white/60 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400/50 mt-1">→</span>
                  <span>
                    Criação, busca, atualização e exclusão de usuários e perfis
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400/50 mt-1">→</span>
                  <span>
                    Atribuição de permissões e funcionalidades por perfil
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400/50 mt-1">→</span>
                  <span>
                    Associação de perfis a usuários com controle granular de
                    acesso
                  </span>
                </li>
              </ul>
            </div>

            {/* SEÇÃO: Auditoria */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-4 h-4 text-purple-400/70 mt-1 shrink-0" />
                <h4 className="text-white font-medium">
                  Módulo de Auditoria e Rastreabilidade
                </h4>
              </div>
              <p className="ml-7 text-white/60 text-sm leading-relaxed">
                Desenvolvi telas para visualização de logs e histórico de ações
                administrativas, permitindo o monitoramento de alterações
                críticas do sistema.
              </p>
            </div>

            {/* SEÇÃO: Gestão Administrativa */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-4 h-4 text-orange-400/70 mt-1 shrink-0" />
                <h4 className="text-white font-medium">
                  Gestão Administrativa de Usuários
                </h4>
              </div>
              <ul className="space-y-2 ml-7 text-white/60 text-sm">
                <li className="flex gap-2">
                  <span className="text-orange-400/50 mt-1">→</span>
                  <span>Alteração de status de contas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400/50 mt-1">→</span>
                  <span>Redefinição de senha administrativa</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400/50 mt-1">→</span>
                  <span>Gerenciamento de permissões por perfil</span>
                </li>
              </ul>
            </div>

            {/* SEÇÃO: Interfaces e Componentes */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <h4 className="text-white font-medium mb-3">
                Interfaces e Componentes
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Construí interfaces responsivas e componentes reutilizáveis,
                além de otimizar o consumo de APIs e gerenciamento de estados
                para melhorar a experiência em consultas e atualizações de
                dados. O código é organizado e versionado com
                <span className="text-white font-medium"> Git/GitHub</span>,
                seguindo boas práticas de manutenção e estruturação de
                componentes.
              </p>
            </div>

            {/* STACK DE TECNOLOGIAS */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-3">
                Stack & Tecnologias
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "ShadCN UI",
                  "Zod",
                  "API REST",
                  "Git/GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-linear-to-r from-white/5 to-white/10 text-white/60 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                    style={{ padding: "0.5rem 0.875rem" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
