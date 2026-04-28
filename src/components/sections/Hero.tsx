import heroImg from "@/assets/images/hero-datacenter.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-28 overflow-hidden"
    >
      {/* LUCES DE FONDO */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-xs sm:text-sm bg-white/10 px-4 py-1 rounded-full backdrop-blur-md border border-white/10">
            ✨ Más de 17 años transformando empresas en México
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Infraestructura TI{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              de clase mundial
            </span>{" "}
            para tu organización.
          </h1>

          <p className="text-gray-300 mt-5 max-w-lg text-sm sm:text-base">
            Hardware, servidores, equipos de cómputo y soluciones integrales
            para el sector gobierno e iniciativa privada. Integramos tecnología
            que impulsa resultados.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => goTo("productos")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Ver catálogo →
            </button>

            <button
              onClick={() => goTo("contacto")}
              className="px-6 py-3 rounded-xl border border-cyan-400/30 text-white hover:-translate-y-1 transition-all duration-300"
            >
              Hablar con un experto
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-12 text-cyan-400 font-semibold">
            <div>
              <p className="text-2xl sm:text-3xl">15+</p>
              <span className="text-gray-400 text-xs sm:text-sm">
                Años de experiencia
              </span>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl">500+</p>
              <span className="text-gray-400 text-xs sm:text-sm">
                Clientes atendidos
              </span>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl">100%</p>
              <span className="text-gray-400 text-xs sm:text-sm">
                Soporte mexicano
              </span>
            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative w-full max-w-xl mx-auto">

{/* BADGE IZQUIERDA */}
<div className="hidden md:block absolute -top-12 -left-6 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-sm shadow-xl">
  CERTIFICADO <br />
  <span className="text-cyan-400 font-semibold">ISO/IEC 27001</span>
</div>

{/* BADGE DERECHA */}
<div className="hidden md:block absolute -top-12 -right-6 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-sm shadow-xl">
  CERTIFICADO <br />
  <span className="text-cyan-400 font-semibold">ISO/IEC 20000-1</span>
</div>

          {/* IMAGEN CON PARALLAX */}
          <img
            src={heroImg}
            style={{ transform: `translateY(${offsetY * 0.05}px)` }}
            className="rounded-2xl w-full object-cover border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-transform duration-75"
          />

          {/* GLOW SUAVE */}
          <div className="absolute inset-0 -z-10 blur-2xl bg-cyan-500/15"></div>
        </div>
      </div>
    </section>
  );
}