import { IoCode, IoConstruct } from "react-icons/io5";
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

export function Stack() {
  const stacks = [
    {
      icon: IoCode,
      title: "Front-end",
      subtitle: "Desenvolvimento",
      technologies: [
        "HTML5",
        "CSS3",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      description:
        "Construção de interfaces modernas e responsivas, com foco em componentes reutilizáveis, organização de UI e boa experiência do usuário.",
    },
    {
      icon: IoConstruct,
      title: "Ferramentas",
      subtitle: "Ecossistema",
      technologies: [
        "Git",
        "GitHub",
        "Shadcn/ui",
        "Inteligência Artificial (IA)",
        "Firebase",
        "Vercel",
        "Figma",
        "VS Code",
        "Cursor",
        "Neovim",
      ],
      description:
        "Ferramentas que uso no dia a dia para acelerar desenvolvimento, padronizar UI, versionar código e publicar projetos com consistência.",
    },
  ];

  return (
    <section
      id="stack"
      className="bg-black"
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
            className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4 text-center"
          >
            Stack Técnica
          </MotionP>

          <MotionH2
            variants={fadeInUp}
            className="text-white font-bold text-center"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Tecnologias e ferramentas que uso nos projetos
          </MotionH2>

          <div
            className="grid md:grid-cols-2 "
            style={{ marginTop: "3rem", gap: "1rem" }}
          >
            {stacks.map((stack, index) => (
              <MotionDiv
                key={stack.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-[#111111] border border-white/10 rounded-2xl cursor-default group"
                style={{ padding: "2rem" }}
                data-testid={`card-stack-${index}`}
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <stack.icon className="w-5 h-5 text-white/60" />
                </div>

                <h3
                  className="text-white font-semibold"
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1.125rem",
                    lineHeight: 1.3,
                  }}
                >
                  {stack.subtitle}
                </h3>

                <p
                  className="text-white/40"
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {stack.description}
                </p>

                <div
                  className="flex flex-wrap gap-2"
                  style={{ marginTop: "1.25rem" }}
                >
                  {stack.technologies.slice(0, 15).map((tech) => (
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
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
