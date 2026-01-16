import { IoLogoWhatsapp, IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      className="bg-black border-t border-white/10"
      style={{ padding: "3rem 0" }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 2rem)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Rui Barbosa</span>
            <span className="text-white/30">•</span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <IoLocationSharp className="w-3 h-3" />
              Imperatriz – MA
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#sobre"
              className="text-white/40 hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#stack"
              className="text-white/40 hover:text-white transition-colors"
            >
              Stack
            </a>
            <a
              href="#projetos"
              className="text-white/40 hover:text-white transition-colors"
            >
              Projetos
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://wa.me/559991722391?text=Olá%2C%20vim%20pelo%20seu%20portfólio.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              data-testid="link-whatsapp"
            >
              <IoLogoWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/RuiBarbosaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              data-testid="link-github-footer"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rui-barbosa-295abb290/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              data-testid="link-linkedin-footer"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          className="text-center text-white/20 text-xs"
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          © {new Date().getFullYear()} Rui Barbosa. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
