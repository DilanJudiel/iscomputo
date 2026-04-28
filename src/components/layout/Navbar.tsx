import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/80 backdrop-blur-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">

{/* LOGO */}
<div className="flex items-center gap-3 group cursor-pointer ">
  
  <img
    src="/logo.svg"
    alt="I&S Cómputo"
    className="h-12 md:h-14 w-auto object-contain transition-all duration-300 hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
  />

</div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <button onClick={() => goTo("productos")} className="hover:text-cyan-400">Productos</button>
          <button onClick={() => goTo("sectores")} className="hover:text-cyan-400">Sectores</button>
            <button onClick={() => goTo("por-que-nosotros")} className="hover:text-cyan-400">Por qué nosotros</button>
          <button onClick={() => goTo("aliados")} className="hover:text-cyan-400">Aliados</button>
          <button onClick={() => goTo("contacto")} className="hover:text-cyan-400">Contacto</button>
        </nav>

        {/* BOTON EXTERNO */}
        <a
          href="https://soporte.iscomputo.net/asmscustomer/index.html#/project=MQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
        >
          Mesa de Servicio
        </a>

        {/* MOBILE BTN */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-white/20 px-6 py-6 flex flex-col gap-4 text-gray-300">
          <button onClick={() => goTo("productos")}>Productos</button>
          <button onClick={() => goTo("sectores")}>Sectores</button>
          <button onClick={() => goTo("por-que-nosotros")}>Por qué nosotros</button>
          <button onClick={() => goTo("aliados")}>Aliados</button>
          <button onClick={() => goTo("contacto")}>Contacto</button>

          <a
            href="https://soporte.iscomputo.net/asmscustomer/index.html#/project=MQ=="
            target="_blank"
            className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-center"
          >
            Mesa de Servicio
          </a>
        </div>
      )}
    </header>
  );
}