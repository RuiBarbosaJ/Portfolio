import { MotionDiv, MotionH2 } from "@/components/ui/motion-wrapper";

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

export function About() {
  return (
    <section
      id="sobre"
      className="bg-[#0A0A0A]"
      style={{ padding: "clamp(2.67rem, 5.33vw, 5.33rem) 0" }}
    >
      <div
        className="max-w-180 mx-auto"
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
            Sobre mim
          </MotionH2>

          <MotionDiv
            variants={fadeInUp}
            className="text-white/50"
            style={{ marginTop: "2rem" }}
          >
            <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
              Sou{" "}
              <strong className="text-white font-medium">
                Desenvolvedor Front-end
              </strong>{" "}
              com foco em{" "}
              <strong className="text-white font-medium">
                React, Next.js, TypeScript e Tailwind CSS
              </strong>
              . Tenho experiência construindo{" "}
              <strong className="text-white font-medium">
                interfaces e módulos administrativos
              </strong>{" "}
              com validações, componentes reutilizáveis e consistência visual,
              traduzindo{" "}
              <strong className="text-white font-medium">
                regras de negócio
              </strong>{" "}
              em UI clara e escalável.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginTop: "1rem" }}>
              Também trago experiência na{" "}
              <strong className="text-white font-medium">
                área administrativa
              </strong>
              , lidando com{" "}
              <strong className="text-white font-medium">
                dados sensíveis, processos e rotinas financeiras
              </strong>
              , o que reforça minha disciplina, comunicação e atenção a detalhes
              no desenvolvimento.{" "}
              <strong className="text-white font-medium">
                Versiono e organizo código com Git/GitHub
              </strong>{" "}
              e mantenho estudo contínuo em{" "}
              <strong className="text-white font-medium">
                Next.js e ferramentas de front-end
              </strong>
              .
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
