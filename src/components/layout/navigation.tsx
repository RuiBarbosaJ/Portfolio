"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MotionP } from "../ui/motion-wrapper";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 2rem)" }}
      >
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-base font-semibold tracking-tight text-white"
            data-testid="link-home"
          >
            Rui Barbosa
            <MotionP className="text-white/40 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6">
              Portfólio
            </MotionP>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              data-testid="link-sobre"
            >
              Sobre
            </a>
            <a
              href="#stack"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              data-testid="link-stack"
            >
              Stack
            </a>
            <a
              href="#projetos"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              data-testid="link-projetos"
            >
              Projetos
            </a>
            <a
              href="https://github.com/RuiBarbosaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 cursor-pointer"
              data-testid="button-github-nav"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6 text-white" />
            ) : (
              <IoMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-6">
            <a
              href="#sobre"
              className="block text-base font-medium text-white"
              onClick={() => setIsOpen(false)}
              data-testid="link-sobre-mobile"
            >
              Sobre
            </a>
            <a
              href="#stack"
              className="block text-base font-medium text-white"
              onClick={() => setIsOpen(false)}
              data-testid="link-stack-mobile"
            >
              Stack
            </a>
            <a
              href="#projetos"
              className="block text-base font-medium text-white"
              onClick={() => setIsOpen(false)}
              data-testid="link-projetos-mobile"
            >
              Projetos
            </a>
            <a
              href="https://github.com/RuiBarbosaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm"
              data-testid="button-github-nav-mobile"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
