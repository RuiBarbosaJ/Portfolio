"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual é minha experiência profissional?",
      a: "Tenho experiência na área administrativa com dados financeiros, rotinas operacionais e processos, o que reforça visão de negócio e organização. No desenvolvimento web, atuo como Front-end construindo interfaces e módulos administrativos com foco em clareza e escalabilidade.",
    },
    {
      q: "Quais tecnologias eu utilizo?",
      a: "Foco em React, Next.js, TypeScript, Tailwind CSS e Git/GitHub, além de bibliotecas como React Hook Form, Zod e consumo de APIs REST.",
    },
    {
      q: "Estou disponível para projetos?",
      a: "Sim! Estou disponível para atuar como Desenvolvedor Front-end em modelo CLT, estágio ou freelancer.",
    },
    {
      q: "Como é minha metodologia de trabalho?",
      a: "Priorizo código limpo, componentização, tipagem forte, organização por feature e boas práticas de versionamento, sempre alinhado às necessidades do produto.",
    },
  ];

  return (
    <section
      className="bg-[#0A0A0A]"
      style={{ padding: "clamp(2.67rem, 5.33vw, 5.33rem) 0" }}
    >
      <div
        className="max-w-180 mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 2rem)" }}
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-white font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Alguma dúvida? Aqui está a resposta
          </motion.h2>

          <motion.div variants={fadeInUp} className="mt-8 space-y-2 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                  data-testid={`button-faq-${index}`}
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <IoChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: "easeOut" },
                          opacity: { duration: 0.2, ease: "easeOut" },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2, ease: "easeIn" },
                          opacity: { duration: 0.15, ease: "easeIn" },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-white/50 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
