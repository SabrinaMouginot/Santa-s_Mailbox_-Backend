# Santa's Mailbox (Backend)

![image](https://github.com/user-attachments/assets/f55fc9d0-297a-4d1b-a3cc-8edfa5756043)


![image](https://github.com/user-attachments/assets/9f64124d-6b11-4f39-97cf-cf86e645716a)


![image](https://github.com/user-attachments/assets/7c6034ae-4f20-4897-80a2-d153739651b9)


Ce projet est le backend de l'application *Calendrier de l'Avent 2024*. Il permet aux utilisateurs d'envoyer une lettre au Père Noël grâce à une API.

---

## **Fonctionnalités principales**

- Endpoint pour soumettre une lettre au Père Noël.
- Gestion des envois d'emails via un service de messagerie comme **SendGrid** ou un autre service SMTP.
- Validation des données soumises par l'utilisateur.

---

## **Technologies utilisées**

- **Node.js** : Environnement d'exécution JavaScript pour le backend.
- **Express.js** : Framework minimaliste pour la gestion des routes.
- **SendGrid API** : Envoi des lettres par email.
- **JavaScript ES6+** : Utilisation de modules modernes pour structurer le code.

---

## **Prérequis**

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- Un gestionnaire de packages comme **npm** ou **yarn**

---

## **Installation**

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/santas-mailbox-backend.git

2. Accédez au dossier :
   ```bash
   cd santas-mailbox-backend

3. Installez les dépendances :
   ```bash
   npm install
ou
   ```bash
   yarn install
   ```

---

## **Configuration**
Créez un fichier .env à la racine avec les variables suivantes :

   ```env
   PORT=5000
   SENDGRID_API_KEY=votre-clé-api-sendgrid
   EMAIL_FROM=votre-email-source@example.com
   EMAIL_TO=email-destination@example.com
   ```

### **Explications :**
- PORT : Port sur lequel le serveur écoute (par défaut : 5000).
- SENDGRID_API_KEY : Clé API pour le service SendGrid (ou remplacez par votre service SMTP).
- EMAIL_FROM : Adresse email source (expéditeur).
- EMAIL_TO : Adresse email destination (Père Noël ou une boîte de réception).


---

## **Lancement**
Démarrez le serveur en mode développement :

   ```bash
   npm run dev
   ```
ou

   ```bash
   yarn dev
   ```

Le backend sera disponible à :

   ```arduino
   http://localhost:5000
   ```

---

## **Endpoints**
### **POST /send-letter**
Description : Permet à un utilisateur d'envoyer une lettre au Père Noël.
Requête :
   ```json
{
  "name": "Léa",
  "email": "lea@example.com",
  "letter": "Cher Père Noël..."
}
   ```

Réponse (succès) :
   ```json
{
  "message": "Votre lettre a été envoyée au Père Noël !"
}
   ```

Réponse (erreur) :
   ```json
{
  "error": "Une erreur est survenue lors de l'envoi de votre lettre."
}
   ```

## **Déploiement**
### **Avec OVH et FileZilla**

1. Préparez votre backend.

- Uploadez tous les fichiers backend via FileZilla vers votre serveur OVH.
- Par exemple, placez les fichiers dans /api ou un répertoire spécifique.

2. Configurez votre serveur :

- Installez Node.js sur votre serveur OVH si ce n'est pas déjà fait.
- Naviguez dans le dossier backend sur votre serveur via SSH.
- Installez les dépendances en exécutant :

   ```bash
npm install

- Démarrez le serveur avec :
  
   ```bash
node server.js

## **Structure des fichiers**
   ```bash
santas-mailbox-backend/
├── .env                  # Variables d'environnement
├── server.js             # Point d'entrée principal
├── routes/               # Gestion des routes API
│   └── letter.js         # Route pour envoyer une lettre
├── controllers/          # Logique des contrôleurs
│   └── letterController.js # Contrôleur pour gérer l'envoi des lettres
├── services/             # Services auxiliaires
│   └── emailService.js   # Service pour envoyer des emails
├── package.json          # Dépendances du projet
└── README.md             # Documentation
   ```

## **Tests**
Pour s'assurer que le backend fonctionne correctement, vous pouvez utiliser des outils comme Postman ou cURL pour tester l'endpoint /send-letter.


## **Améliorations futures**
- Ajouter une base de données pour stocker les lettres envoyées.
- Implémenter un système de pagination pour afficher les lettres dans une interface admin.
- Ajouter des fonctionnalités multilingues pour prendre en charge plusieurs langues.

