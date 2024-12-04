const nodemailer = require("nodemailer");

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "ssl0.ovh.net", // Serveur SMTP d'OVH
  port: process.env.SMTP_PORT || 587, // Port SMTP (465 pour SSL ou 587 pour STARTTLS)
  secure: process.env.SMTP_SECURE === "true", // true pour 465, false pour 587
  auth: {
    user: process.env.SMTP_USER, // Adresse e-mail complète
    pass: process.env.SMTP_PASS, // Mot de passe
  },
});

// Fonction d'envoi d'e-mail
const sendEmail = async (data) => {
  const { name, email, letter } = data;

  const mailOptions = {
    from: `"Père Noël" <${process.env.SMTP_USER}>`, // Expéditeur
    to: process.env.SMTP_USER, // Adresse destinataire (e-mail du Père Noël)
    subject: `Nouvelle lettre au Père Noël de ${name}`, // Sujet
    text: `Nom : ${name}\nEmail : ${email}\n\nLettre :\n${letter}`, // Texte brut
    html: `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Lettre :</strong></p>
      <p>${letter}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’e-mail :", error.message);
    throw error;
  }
};

module.exports = sendEmail;
