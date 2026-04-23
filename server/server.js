import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { nombre, empresa, correo, telefono, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // 👈 cambia esto
      port: 587,
      secure: false,
      auth: {
        user: "soporte@iscomputo.net", // 👈 tu correo
        pass: "columPi0#2520", // 👈 contraseña o app password
      },
    });

    await transporter.sendMail({
      from: `"Web I&S" <soporte@iscomputo.net>`,
      to: "soporte@iscomputo.net",
      subject: "Nuevo cliente desde la web",
      html: `
        <h3>Nuevo lead</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Empresa:</b> ${empresa}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Mensaje:</b><br/> ${mensaje}</p>
      `,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
});

app.listen(3001, () => console.log("Servidor corriendo en 3001"));