export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-3 gap-12">

        {/* LOGO + INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" className="h-20" />
            {/* <div>
              <p className="font-semibold">I&S Cómputo</p>
              <p className="text-xs text-gray-400">Integración para TI</p>
            </div> */}
          </div>

          <p className="text-gray-400 text-sm max-w-sm">
            Integradores de servicios y productos en informática desde 2009.
            Comprometidos con la transformación digital de México.
          </p>
        </div>

        {/* EMPRESA */}
        <div>
          <h4 className="font-semibold mb-4">EMPRESA</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#productos" className="hover:text-cyan-400">Productos</a></li>
            <li><a href="#sectores" className="hover:text-cyan-400">Sectores</a></li>
            <li><a href="#por-que-nosotros" className="hover:text-cyan-400">Por qué nosotros</a></li>
            <li><a href="#contacto" className="hover:text-cyan-400">Contacto</a></li>
          </ul>
        </div>

        {/* VALORES */}
        <div>
          <h4 className="font-semibold mb-4">VALORES</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Responsabilidad</li>
            <li>Honestidad</li>
            <li>Respeto</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 md:px-16">

        <p>© 2026 I&S Cómputo. Todos los derechos reservados.</p>

        <p>
          Desarrollado por{" "}
          <span className="text-cyan-400 font-semibold">
            AiTechnology
          </span>
        </p>

      </div>

    </footer>
  );
}