import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion-wrapper";

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

export function Objective() {
  return (
    <section
      className="bg-[#0A0A0A]"
      style={{ padding: "clamp(2.67rem, 5.33vw, 5.33rem) 0" }}
    >
      <div
        className="max-w-180 mx-auto text-center"
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
            Objetivo
          </MotionH2>

          <MotionP
            variants={fadeInUp}
            className="text-white/50"
            style={{
              marginTop: "1.5rem",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            Busco minha{" "}
            <strong className="text-white font-medium">
              primeira oportunidade profissional como desenvolvedor web
            </strong>
            , onde eu possa crescer tecnicamente, contribuir com código bem
            estruturado e evoluir junto ao time.
          </MotionP>
          <MotionP
            variants={fadeInUp}
            className="text-white/50"
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            Tenho grande interesse em ambientes que valorizem boas práticas,
            aprendizado contínuo e desenvolvimento de sistemas reais.
          </MotionP>
        </MotionDiv>
      </div>
    </section>
  );
}
