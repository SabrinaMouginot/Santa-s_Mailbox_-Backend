const bodyParser = require("body-parser");
const sendEmail = require("./sendEmail");

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

