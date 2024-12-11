# Santa's Mailbox (Backend)

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
  
