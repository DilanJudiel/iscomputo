import { motion } from "framer-motion";
import { Building2, Landmark, CheckCircle2 } from "lucide-react";
import bg from "@/assets/images/sectors.jpg";

export default function Sectors() {
  return (
    <section
      id="sectores"
      className="w-full px-6 md:px-16 py-16 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            SECTORES QUE ATENDEMOS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Expertos en{" "}
            <span className="text-cyan-400">
              gobierno e iniciativa privada
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl text-sm sm:text-base">
            Conocemos los procesos, tiempos y requerimientos de cada sector.
            Te acompañamos desde la planeación hasta la implementación.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">

          {/* GOBIERNO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                <Landmark className="text-black" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Sector Gobierno
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Federal · Estatal · Municipal
                </p>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {[
                "Procesos de licitación y contratos abiertos",
                "Cumplimiento normativo y trazabilidad",
                "Atención a dependencias federales, estatales y municipales",
                "Facturación y entrega conforme a la LAASSP",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={18} />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PRIVADA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                <Building2 className="text-black" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Iniciativa Privada
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  PyME · Corporativo · Industria
                </p>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {[
                "Asesoría especializada por industria",
                "Esquemas flexibles de adquisición",
                "Soporte técnico continuo y SLA garantizado",
                "Renovaciones tecnológicas y planes a medida",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={18} />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* BLOQUE INFERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/10"
        >

          {/* IMAGEN */}
          <img
            src={bg}
            alt="Cobertura nacional"
            className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>

          {/* TEXTO */}
          <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 max-w-xs sm:max-w-md md:max-w-lg">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Confianza construida <br /> proyecto a proyecto
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              Operamos en la Ciudad de México, Área Metropolitana y atendemos
              proyectos en toda la República Mexicana.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}