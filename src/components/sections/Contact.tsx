import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const payload = {
    nombre: data.get("nombre"),
    empresa: data.get("empresa"),
    correo: data.get("correo"),
    telefono: data.get("telefono"),
    mensaje: data.get("mensaje"),
  };

  try {
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = `Hola, quiero información:

Nombre: ${payload.nombre}
Empresa: ${payload.empresa}
Correo: ${payload.correo}
Teléfono: ${payload.telefono}

Mensaje:
${payload.mensaje}`;

    window.open(
      `https://wa.me/525621671702?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    form.reset();
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <section id="contacto" className="w-full px-6 md:px-16 py-28">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* IZQUIERDA */}
        <div>
          <span className="text-xs px-4 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            CONTACTO
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Hablemos de tu{" "}
            <span className="text-cyan-400">
              próximo proyecto
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md">
            Cuéntanos qué necesitas. Recibirás una propuesta personalizada en menos de 24 horas hábiles.
          </p>

          {/* INFO */}
          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <Mail className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">CORREO</p>
                <p className="font-semibold">informes@iscomputo.net</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <Phone className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">TELÉFONO</p>
                <p className="font-semibold">+52 55 1549 4430 / 55 2589 3981</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <Phone className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">SOPORTE</p>
                <p className="font-semibold">800 400 4430 / soporte@iscomputo.net</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <MapPin className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">UBICACIÓN</p>
                <p className="font-semibold">Ciudad de México, México</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >

          <div className="grid md:grid-cols-2 gap-4">

            <input
              name="nombre"
              placeholder="Nombre completo"
              className="input"
              required
            />

            <input
              name="empresa"
              placeholder="Empresa"
              className="input"
            />

            <input
              name="correo"
              type="email"
              placeholder="Correo corporativo"
              className="input"
              required
            />

            <input
              name="telefono"
              placeholder="Teléfono"
              className="input"
            />

          </div>

          <textarea
            name="mensaje"
            placeholder="¿Cómo podemos ayudarte?"
            className="input mt-4 h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Enviar solicitud →
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Tus datos se tratan con confidencialidad.
          </p>

        </form>

      </div>
    </section>
  );
}