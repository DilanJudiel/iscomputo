import heroImg from "@/assets/images/hero-datacenter.jpg";

import iso27001 from "@/assets/certificates/iso27001.png";
import iso20000 from "@/assets/certificates/iso20000.png";

import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const goTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="inicio"
        className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-32 overflow-hidden"
      >
        {/* LUCES DE FONDO */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <span className="text-xs sm:text-sm bg-white/10 px-4 py-1 rounded-full backdrop-blur-md border border-white/20">
              ✨ Más de 17 años transformando empresas en México
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Infraestructura TI{" "}

              <span className="text-cyan-400 drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]">
                de clase mundial
              </span>{" "}

              para tu organización.
            </h1>

            <p className="text-gray-300 mt-6 max-w-xl text-base leading-relaxed">I&S Cómputo se incorpora al mercado mexicano en abril de 2009 como integradores de servicios y productos en informática.</p>
            <p className="text-gray-300 mt-6 max-w-xl text-base leading-relaxed">Somos una empresa integradora de servicios y productos de calidad que contribuyen a la transformación digital, ofreciendo amplia experiencia en tres principales áreas: Integración de Soluciones, Servicios Profesionales e Infraestructura Tecnológica.</p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={() => goTo("productos")}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-105 transition-all duration-300"
              >
                Ver catálogo →
              </button>

              <button
                onClick={() => goTo("contacto")}
                className="px-7 py-3 rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur-md text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                Hablar con un experto
              </button>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <p className="text-3xl font-bold text-cyan-400">17+</p>

                <span className="text-gray-300 text-sm">
                  Años de experiencia
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold text-cyan-400">500+</p>

                <span className="text-gray-300 text-sm">
                  Clientes atendidos
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>

                <span className="text-gray-300 text-sm">
                  Soporte mexicano
                </span>
              </div>

            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative w-full max-w-2xl mx-auto">

            {/* CERTIFICADO IZQUIERDA */}
            <div
              onClick={() => setSelectedCert(iso27001)}
              className="hidden md:block absolute -top-14 -left-8 z-20 bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-sm shadow-2xl cursor-pointer hover:border-cyan-400/50 hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              CERTIFICADO <br />

              <span className="text-cyan-400 font-semibold">
                ISO/IEC 27001
              </span>
            </div>

            {/* CERTIFICADO DERECHA */}
            <div
              onClick={() => setSelectedCert(iso20000)}
              className="hidden md:block absolute -top-14 -right-8 z-20 bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-sm shadow-2xl cursor-pointer hover:border-cyan-400/50 hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              CERTIFICADO <br />

              <span className="text-cyan-400 font-semibold">
                ISO/IEC 20000-1
              </span>
            </div>

            {/* IMAGEN PRINCIPAL */}
            <img
              src={heroImg}
              alt="Data Center"
              style={{
                transform: `translateY(${offsetY * 0.04}px)`,
              }}
              className="relative z-10 rounded-3xl w-full object-cover border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] transition-transform duration-75"
            />

            {/* GLOW */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-cyan-400/20"></div>
          </div>
        </div>
      </section>

      {/* MODAL CERTIFICADOS */}
{selectedCert && (
  <div
    onClick={() => setSelectedCert(null)}
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
  >
    <div className="relative flex items-center justify-center">

      <button
        onClick={() => setSelectedCert(null)}
        className="absolute -top-12 right-0 text-white text-3xl hover:text-cyan-400 transition"
      >
        ✕
      </button>

      <img
        src={selectedCert}
        alt="Certificado"
        className="max-w-md md:max-w-lg w-full mx-auto rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)] object-contain"
      />
    </div>
  </div>
)}
    </>
  );
}