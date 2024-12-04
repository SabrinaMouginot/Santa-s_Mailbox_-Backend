const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail = require("./sendEmail");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route pour envoyer une lettre
app.post("/send-letter", async (req, res) => {
  try {
    console.log("Requête reçue :", req.body); // Log pour déboguer les données reçues
    await sendEmail(req.body);
    res.status(200).send("Lettre envoyée avec succès !");
  } catch (error) {
    console.error("Erreur backend :", error.message); // Log des erreurs backend
    res.status(500).json({
      message: "Erreur lors de l’envoi de la lettre.",
      error: error.message,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
