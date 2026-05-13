import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const goTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <footer className="w-full border-t border-white/10 mt-20">

        {/* CONTENIDO */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LOGO */}
          <div>

            <img
              src="/logo.png"
              alt="I&S Cómputo"
              className="h-16 w-auto object-contain mb-6"
            />

            <p className="text-gray-300 leading-relaxed max-w-sm">
              Integradores de servicios y productos en informática desde 2009.
              Comprometidos con la transformación digital de México.
            </p>

          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="font-semibold mb-6 uppercase text-white">
              Empresa
            </h3>

            <div className="space-y-3 text-gray-300">

              <button
                onClick={() => goTo("productos")}
                className="block hover:text-cyan-400 transition"
              >
                Productos
              </button>

              <button
                onClick={() => goTo("sectores")}
                className="block hover:text-cyan-400 transition"
              >
                Sectores
              </button>

              <button
                onClick={() => goTo("por-que-nosotros")}
                className="block hover:text-cyan-400 transition"
              >
                Por qué nosotros
              </button>

              <button
                onClick={() => goTo("contacto")}
                className="block hover:text-cyan-400 transition"
              >
                Contacto
              </button>

            </div>
          </div>

          {/* DOCUMENTACIÓN */}
          <div>
            <h3 className="font-semibold mb-6 uppercase text-white">
              Documentación
            </h3>

            <div className="space-y-3 text-gray-300">

              <button
                onClick={() => setOpenModal("privacidad")}
                className="block hover:text-cyan-400 transition"
              >
                Aviso de privacidad
              </button>

              <button
                onClick={() => setOpenModal("sgi")}
                className="block hover:text-cyan-400 transition"
              >
                Alcance SGI
              </button>

              <button
                onClick={() => setOpenModal("politica")}
                className="block hover:text-cyan-400 transition"
              >
                Política SGI
              </button>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

            <p>
              © 2026 I&S Cómputo. Todos los derechos reservados.
            </p>

            <p>
              Desarrollado por{" "}
              <span className="text-cyan-400 font-semibold">
                AiTechnology
              </span>
            </p>

          </div>
        </div>
      </footer>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setOpenModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold text-cyan-400">

                {openModal === "privacidad" &&
                  "Aviso de Privacidad"}

                {openModal === "sgi" &&
                  "Alcance SGI"}

                {openModal === "politica" &&
                  "Política SGI"}

              </h2>

              <button
                onClick={() => setOpenModal(null)}
                className="text-2xl hover:text-cyan-400 transition"
              >
                ✕
              </button>

            </div>

            {/* CONTENIDO */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm">

              {/* PRIVACIDAD */}
{openModal === "privacidad" && (
  <div className="space-y-6 text-gray-300 leading-relaxed text-sm">

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Aviso de Privacidad
      </h3>

      <p>
        Los Datos Personales que le son solicitados, son tratados por
        “I&S Integración & Servicios de Cómputo Administrado, S.A. de C.V.”
        (en adelante “LA EMPRESA”), con domicilio en Las Huertas 107 Oficina
        1008 y 1009, Col. Actipan, Alcaldía Benito Juárez, C.P. 03230,
        Ciudad de México.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Finalidades del tratamiento
      </h3>

      <p>
        Sus datos personales serán utilizados para:
      </p>

      <ul className="list-disc ml-6 mt-3 space-y-2">
        <li>Cotización de servicios.</li>
        <li>Elaboración de propuestas técnicas.</li>
        <li>Administración de historial de clientes.</li>
        <li>Atención y soporte técnico.</li>
        <li>Contactos administrativos y comerciales.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Transferencia de datos
      </h3>

      <p>
        LA EMPRESA podrá transferir sus Datos Personales con empresas
        nacionales o internacionales relacionadas, así como con autoridades
        competentes que lo soliciten conforme a la legislación aplicable.
      </p>

      <p className="mt-3">
        Todas las transferencias se realizarán bajo estrictas medidas
        de seguridad y confidencialidad conforme a la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Protección de información
      </h3>

      <p>
        Sus datos personales serán tratados bajo principios de licitud,
        consentimiento, información, calidad, finalidad, lealtad,
        proporcionalidad y responsabilidad.
      </p>

      <p className="mt-3">
        Implementamos medidas administrativas, técnicas y físicas para
        evitar daño, pérdida, alteración, acceso o divulgación no autorizada.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Derechos ARCO
      </h3>

      <p>
        Usted podrá ejercer sus derechos de Acceso, Rectificación,
        Cancelación u Oposición (ARCO), así como revocar su consentimiento,
        mediante solicitud formal dirigida a LA EMPRESA.
      </p>

      <p className="mt-3">
        La solicitud deberá incluir la información necesaria para acreditar
        su identidad conforme a la legislación aplicable.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Información en Internet y Redes Sociales
      </h3>

      <p>
        Nuestro portal podrá utilizar cookies y tecnologías similares
        para mejorar la experiencia de navegación y obtener información
        estadística sobre el uso del sitio.
      </p>

      <p className="mt-3">
        Las redes sociales utilizadas por LA EMPRESA son plataformas
        externas y su funcionamiento depende de los términos y políticas
        propias de cada proveedor.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Cambios al Aviso de Privacidad
      </h3>

      <p>
        LA EMPRESA se reserva el derecho de realizar modificaciones
        al presente Aviso de Privacidad. Cualquier actualización será
        publicada a través de nuestros medios oficiales.
      </p>
    </div>

    <div className="border-t border-white/10 pt-6 text-xs text-gray-400">
      © Copyright 2025 I&S Integración & Servicios de Cómputo
      Administrado, S.A. de C.V. Todos los derechos reservados.
    </div>

  </div>
)}

              {/* SGI */}
{openModal === "sgi" && (
  <div className="space-y-6 text-gray-300 leading-relaxed text-sm">

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Alcance del SGI
      </h3>

      <p>
        El Sistema de Gestión Integral (SGI) de I&S Integración &
        Servicios de Cómputo Administrado, S.A. de C.V. contempla
        el suministro, implementación y soporte para soluciones
        integrales en Tecnologías de la Información y servicios
        administrados de TI a través de la operación de mesa de servicio.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Alcance de los servicios
      </h3>

      <ul className="list-disc ml-6 space-y-3">

        <li>
          Suministro de tecnologías de la información.
        </li>

        <li>
          Servicios administrados de tecnologías de la información.
        </li>

        <li>
          Servicios de soporte y atención a garantías.
        </li>

        <li>
          Servicios de soporte técnico y reparación de tecnologías
          de la información.
        </li>

      </ul>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Referencias documentales
      </h3>

      <p>
        El alcance considera los servicios descritos en el
        documento <span className="text-white font-medium">
        FO_VTA_002 Portafolio y catálogo de servicios</span>,
        versión 01 con fecha del 01 de octubre del 2025.
      </p>

      <p className="mt-3">
        Asimismo, contempla los controles de seguridad descritos
        en el documento <span className="text-white font-medium">
        DO_SGI_008 Declaración de aplicabilidad SoA</span>,
        versión 01 con fecha del 01 de octubre del 2025.
      </p>
    </div>

    <div className="border-t border-white/10 pt-6 text-xs text-gray-400">
      Sistema de Gestión Integral (SGI) · I&S Cómputo
    </div>

  </div>
)}

              {/* POLÍTICA */}
{openModal === "politica" && (
  <div className="space-y-6 text-gray-300 leading-relaxed text-sm">

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Política del SGI
      </h3>

      <p>
        En I&S Cómputo promovemos la transformación digital a través
        de la integración de servicios y soluciones en tecnología,
        siempre en busca de brindar la confianza que nos permita
        ser la primera opción de nuestros clientes.
      </p>
    </div>

    <div>
      <h3 className="text-cyan-400 font-semibold mb-2">
        Nuestros compromisos
      </h3>

      <ul className="list-disc ml-6 space-y-4">

        <li>
          Orientamos todos nuestros esfuerzos hacia asegurar la
          completa satisfacción del cliente y fomentar su fidelidad,
          demostrando en todo momento una conducta de integridad
          y ética.
        </li>

        <li>
          Vigilamos el cumplimiento de requisitos legales,
          reglamentarios y contractuales para el óptimo
          funcionamiento y crecimiento de nuestras operaciones.
        </li>

        <li>
          Implementamos procesos de mejora continua en la integración
          de soluciones tecnológicas, productos y servicios.
        </li>

        <li>
          Ponemos a disposición de nuestros clientes y usuarios
          una mesa de servicio para asegurar la disponibilidad
          continua y el soporte oportuno.
        </li>

        <li>
          Establecemos controles de seguridad de la información
          para asegurar la confidencialidad, disponibilidad
          e integridad de la información.
        </li>

      </ul>
    </div>

    <div className="border-t border-white/10 pt-6 text-xs text-gray-400">
      Política del Sistema de Gestión Integral · I&S Cómputo
    </div>

  </div>
)}

            </div>
          </div>
        </div>
      )}
    </>
  );
}