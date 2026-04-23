import {
  Laptop,
  Monitor,
  Tablet,
  Smartphone,
  Printer,
  Scan,
  Server,
  Database,
  Network,
} from "lucide-react";

import { motion } from "framer-motion";

const items = [
  {
    title: "Computadoras móviles",
    desc: "Laptops empresariales, workstations portátiles y equipos rugged para trabajo en campo.",
    icon: Laptop,
  },
  {
    title: "Equipos de escritorio",
    desc: "Desktops corporativos, all-in-one y workstations para alto rendimiento.",
    icon: Monitor,
  },
  {
    title: "Tabletas",
    desc: "Tablets profesionales para movilidad, atención a cliente y operaciones de campo.",
    icon: Tablet,
  },
  {
    title: "Handhelds",
    desc: "Terminales portátiles industriales para inventario y logística.",
    icon: Smartphone,
  },
  {
    title: "Impresoras y plotters",
    desc: "Impresión multifuncional y plotters de gran formato.",
    icon: Printer,
  },
  {
    title: "Scanners",
    desc: "Escáneres de código de barras y digitalización de alto volumen.",
    icon: Scan,
  },
  {
    title: "Servidores",
    desc: "Servidores rack, torre y blade de marcas líderes.",
    icon: Server,
  },
  {
    title: "Data Center",
    desc: "Diseño e implementación de centros de datos completos.",
    icon: Database,
  },
  {
    title: "Networking",
    desc: "Switches, routers y soluciones de conectividad empresarial.",
    icon: Network,
  },
];

export default function Products() {
  return (
    <section id="productos" className="w-full px-6 md:px-16 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">

          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            CATÁLOGO
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Todo lo que tu organización necesita,{" "}
            <span className="text-cyan-400">en un solo lugar</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Hardware e infraestructura de las marcas más reconocidas del mundo.
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
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
              >

                {/* ICON */}
                <div className="relative w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">

                  <Icon size={20} className="text-black" />

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl blur-xl bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* TITLE */}
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
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