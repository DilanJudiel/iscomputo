import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Headphones,
  Truck,
  Users,
  Zap,
} from "lucide-react";

const items = [
  {
    title: "Marcas certificadas",
    desc: "Partners oficiales de los principales fabricantes a nivel mundial.",
    icon: BadgeCheck,
  },
  {
    title: "Garantía y respaldo",
    desc: "Equipos originales con garantía del fabricante y respaldo I&S.",
    icon: ShieldCheck,
  },
  {
    title: "Mesa de servicio",
    desc: "Soporte técnico especializado con tiempos de respuesta garantizados.",
    icon: Headphones,
  },
  {
    title: "Logística nacional",
    desc: "Entregas oportunas en CDMX, Área Metropolitana y toda la República.",
    icon: Truck,
  },
  {
    title: "Atención personalizada",
    desc: "Un ejecutivo dedicado que conoce tu operación y necesidades.",
    icon: Users,
  },
  {
    title: "Implementación ágil",
    desc: "Desde la cotización hasta la puesta en marcha, sin fricciones.",
    icon: Zap,
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="w-full px-6 md:px-16 py-16 md:py-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">

          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            POR QUÉ ELEGIRNOS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Más que un proveedor,{" "}
            <span className="text-cyan-400">
              tu integrador estratégico
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Desde 2009 ayudamos a organizaciones mexicanas a operar con tecnología confiable,
            escalable y al alcance de sus presupuestos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_15px_60px_rgba(0,0,0,0.5)]"
              >

                {/* ICON */}
                <div className="relative w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">

                  <Icon size={20} className="text-black" />

                  {/* Glow hover */}
                  <div className="absolute inset-0 rounded-xl blur-xl bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* TITLE */}
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}