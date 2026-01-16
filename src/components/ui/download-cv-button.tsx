"use client";

import { IoDownload } from "react-icons/io5";

export function DownloadCVButton() {
  const handleDownload = () => {
    // Cria um link temporário para download
    const link = document.createElement("a");
    link.href = "/Curriculo_Rui_Barbosa.pdf"; // Caminho do arquivo na pasta public
    link.download = "Curriculo_Rui_Barbosa.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/20 transition-all duration-200 cursor-pointer"
      style={{ padding: "1rem 2rem" }}
      data-testid="button-download-cv"
      aria-label="Baixar currículo em PDF"
    >
      <IoDownload className="w-5 h-5" />
      Baixar Currículo
    </button>
  );
}
