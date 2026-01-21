import { IoChevronDown } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion-wrapper";
import { DownloadCVButton } from "@/components/ui/download-cv-button";

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function Hero() {
  return (
    <section className="bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_45%)]" />

      <div
        className="max-w-7xl mx-auto w-full relative z-10"
        style={{
          padding: "0 clamp(1.5rem, 5vw, 2rem)",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <MotionP
            variants={fadeInUp}
            className="text-white/40 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6"
          >
            Rui barbosa de oliveira costa junior
          </MotionP>

          {/* Headline */}
          <MotionH1
            variants={fadeInUp}
            className="text-white font-bold"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Interfaces modernas, rápidas e fáceis de manter.{" "}
            <span className="bg-linear-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              React, Next.js e TypeScript
            </span>{" "}
            com foco em produto.
          </MotionH1>

          {/* Subheadline */}
          <MotionP
            variants={fadeInUp}
            className="text-white/55 max-w-2xl mx-auto"
            style={{
              marginTop: "1.25rem",
              fontSize: "1.1rem",
              lineHeight: 1.75,
            }}
          >
            Trago experiência administrativa com processos e dados sensíveis,
            aplicando visão de negócio no desenvolvimento de interfaces
            modernas, acessíveis e fáceis de manter.
          </MotionP>

          {/* Highlights */}
          <MotionDiv
            variants={fadeInUp}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-left">
              <p className="text-white/70 text-sm font-semibold">Foco</p>
              <p className="text-white/45 text-sm mt-1">
                UI/UX, performance e boas práticas
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-left">
              <p className="text-white/70 text-sm font-semibold">Diferencial</p>
              <p className="text-white/45 text-sm mt-1">
                Visão de negócio e Analítica
              </p>
            </div>
          </MotionDiv>

          {/* CTAs */}
          <MotionDiv
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
            style={{ marginTop: "2.25rem" }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center bg-white text-black rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-200"
              style={{ padding: "1rem 2rem" }}
            >
              Ver projetos
            </a>

            <a
              href="https://github.com/RuiBarbosaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-semibold text-base border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
              style={{ padding: "1rem 2rem" }}
              data-testid="button-github-hero"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>

            <DownloadCVButton />
          </MotionDiv>

          {/* Scroll */}
          <MotionDiv variants={fadeInUp} className="mt-14">
            <a
              href="#sobre"
              className="inline-flex flex-col items-center text-white/30 hover:text-white/55 transition-colors"
            >
              <span className="text-xs mb-2">Role para explorar</span>
              <IoChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
