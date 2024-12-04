const sendEmail = require("./src/sendEmail");

sendEmail({
  name: "Sabrina",
  email: "s.mouginot@yahoo.fr",
  letter: "Cher Père Noël, merci pour tout !",
})
  .then(() => console.log("Test réussi"))
  .catch((error) => console.error("Erreur :", error));
