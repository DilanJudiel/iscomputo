import { motion } from "framer-motion";

const logos = [
  "https://cdn.simpleicons.org/hp",
  "https://cdn.simpleicons.org/dell",
  "https://cdn.simpleicons.org/lenovo",
  "https://cdn.simpleicons.org/cisco",
  "https://cdn.simpleicons.org/microsoft",
  "https://cdn.simpleicons.org/intel",
  "https://cdn.simpleicons.org/epson",
  "https://cdn.simpleicons.org/zebra",
  "https://cdn.simpleicons.org/honeywell",
  "https://cdn.simpleicons.org/apc",
  "https://cdn.simpleicons.org/aruba",
  "https://cdn.simpleicons.org/fortinet",
];

// duplicamos para loop infinito
const loopLogos = [...logos, ...logos];

export default function Allies() {
  return (
    <section id="aliados" className="w-full py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            NUESTROS ALIADOS
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6">
            Trabajamos con las{" "}
            <span className="text-cyan-400">marcas líderes</span>{" "}
            del mundo
          </h2>
        </div>
      </div>

      {/* CARRUSEL */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-10 w-max px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loopLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-24 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md group transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >

              <img
                src={logo}
className="
  h-20
  object-contain
  opacity-60
  transition-all duration-300
  group-hover:opacity-100
  filter brightness-0 invert
  group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]
"
              />

            </div>
          ))}
        </motion.div>

        {/* FADE LADOS (PRO) */}
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent"></div>

      </div>
    </section>
  );
}