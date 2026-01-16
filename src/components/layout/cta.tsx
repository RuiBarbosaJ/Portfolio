import { IoLogoWhatsapp } from "react-icons/io5";
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

const WHATSAPP_LINK =
  "https://wa.me/559991722391?text=Olá%2C%20vim%20pelo%20seu%20portfólio.%20Podemos%20conversar%20sobre%20uma%20oportunidade%20ou%20projeto%3F";

export function CTA() {
  return (
    <section
      id="contato"
      className="bg-black"
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
          className="bg-[#111111] border border-white/10 rounded-3xl"
          style={{ padding: "clamp(2rem, 5vw, 4rem)" }}
        >
          <MotionH2
            variants={fadeInUp}
            className="text-white font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Vamos construir algo juntos?
          </MotionH2>

          <MotionP
            variants={fadeInUp}
            className="text-white/50"
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              lineHeight: 1.7,
            }}
          >
            Estou aberto a oportunidades como{" "}
            <strong className="text-white font-medium">
              desenvolvedor front-end
            </strong>{" "}
            e também a projetos freelance.
            <br />
            Me chama no{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={WHATSAPP_LINK}
              className="text-white underline underline-offset-4"
            >
              WhatsApp
            </a>{" "}
            e eu respondo assim que possível.
          </MotionP>

          <MotionA
            variants={fadeInUp}
            target="_blank"
            rel="noopener noreferrer"
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 cursor-pointer"
            style={{ marginTop: "1.5rem", padding: "0.875rem 1.75rem" }}
            data-testid="button-contact-cta"
          >
            <IoLogoWhatsapp className="w-4 h-4" />
            Falar no WhatsApp
          </MotionA>
        </MotionDiv>
      </div>
    </section>
  );
}
