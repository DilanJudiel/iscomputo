import { motion } from "framer-motion";

import hp from "../assets/logos/hp.svg";
import lenovo from "../assets/logos/lenovo.svg";
import cisco from "../assets/logos/cisco.svg";
import microsoft from "../assets/logos/microsoft.svg";
import intel from "../assets/logos/intel.svg";
import epson from "../assets/logos/epson.svg";
import zebra from "../assets/logos/zebra.svg";
import honeywell from "../assets/logos/honeywell.svg";
import apc from "../assets/logos/apc.svg";
import aruba from "../assets/logos/aruba.svg";
import fortinet from "../assets/logos/fortinet.svg";
import dell from "../assets/logos/dell.svg";
import lexmark from "../assets/logos/lexmark.svg";
import samsung from "../assets/logos/samsung.svg";
import huawei from "../assets/logos/huawei.svg";

const logos = [
  { src: hp, name: "HP" },
  { src: lenovo, name: "Lenovo" },
  { src: cisco, name: "Cisco" },
  { src: microsoft, name: "Microsoft" },
  { src: intel, name: "Intel" },
  { src: epson, name: "Epson" },
  { src: zebra, name: "Zebra" },
  { src: honeywell, name: "Honeywell" },
  { src: apc, name: "APC" },
  { src: aruba, name: "Aruba" },
  { src: fortinet, name: "Fortinet" },
  { src: dell, name: "Dell" },
  { src: lexmark, name: "Lexmark" },
  { src: samsung, name: "Samsung" },
  { src: huawei, name: "Huawei" },
];

// LOOP INFINITO
const loopLogos = [...logos, ...logos];

export default function Allies() {
  return (
    <section
      id="aliados"
      className="w-full py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">

          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            NUESTROS ALIADOS
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6">
            Trabajamos con las{" "}
            <span className="text-cyan-400">
              marcas líderes
            </span>{" "}
            del mundo
          </h2>

        </div>
      </div>

      {/* CARRUSEL */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-8 w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {loopLogos.map((logo, i) => (
            <div
              key={i}
              className="
                min-w-[220px]
                h-28
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                group
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:bg-white/10
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              "
            >

              <img
                src={logo.src}
                alt={logo.name}
                className={`
                  object-contain
                  opacity-90
                  grayscale-[30%]
                  brightness-125
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:grayscale-0
                  group-hover:scale-105
                  group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]

                  ${
                    logo.name === "Fortinet" ||
                    logo.name === "Honeywell" ||
                    logo.name === "Microsoft"
                      ? "h-9 max-w-[180px]"
                      : logo.name === "Dell"
                      ? "h-12 max-w-[120px]"
                      : logo.name === "APC"
                      ? "h-11 max-w-[150px]"
                      : "h-14 max-w-[160px]"
                  }
                `}
              />

            </div>
          ))}

        </motion.div>

        {/* FADE IZQUIERDA */}
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#060816] to-transparent"></div>

        {/* FADE DERECHA */}
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#060816] to-transparent"></div>

      </div>
    </section>
  );
}