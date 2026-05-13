import { Eye, Target, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Vision() {
  const items = [
    {
      title: "Visión",
      icon: Eye,
      text: "Ser la primera opción para nuestros clientes como empresa líder y de confianza en Tecnologías de Información.",
    },

    {
      title: "Misión",
      icon: Target,
      text: "Ayudar a nuestros clientes al buen funcionamiento, aprovechamiento y mejora en su Infraestructura Tecnológica.",
    },

    {
      title: "Valores",
      icon: ShieldCheck,
      text: "Responsabilidad · Honestidad · Respeto",
    },
  ];

  return (
    <section
      id="vision"
      className="w-full px-6 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            NUESTRA ESENCIA
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Visión, misión y{" "}
            <span className="text-cyan-400">
              valores
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Construimos relaciones de confianza a través de tecnología,
            compromiso y mejora continua.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">

                  <Icon className="text-black" size={28} />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-gray-300 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}