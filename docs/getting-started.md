# 🚀 Bien débuter avec n8n

Bienvenue dans le guide du débutant pour **n8n** 👋  
Si vous n’avez jamais utilisé n8n, ne vous inquiétez pas : ce guide va vous accompagner **pas à pas**, depuis l’installation jusqu’à la création et l’exécution de votre premier workflow.

---

## 1️⃣ Qu’est-ce que n8n ?

n8n est un outil d’**automatisation** open source.  
Il permet de connecter vos applications préférées (Gmail, Slack, Google Sheets, APIs, etc.) et de créer des scénarios automatiques appelés **workflows**.

👉 Exemple concret :  
- Quand vous recevez un email Gmail avec une pièce jointe  
- La pièce jointe est automatiquement enregistrée dans Google Drive  
- Une notification est envoyée sur Slack  

Avec n8n, vous pouvez donc **éliminer les tâches répétitives** et vous concentrer sur l’essentiel.

---

## 2️⃣ Préparer votre environnement

Avant d’installer n8n, assurez-vous que votre machine est prête.  

### 📌 Étape 1 : Vérifier Node.js
n8n fonctionne avec **Node.js v18 ou supérieur**.  

1. Ouvrez un terminal.  
2. Tapez :  
   ```bash
   node -v


### 📌 Étape 2 : Vérifier npm
npm est inclus avec Node.js et permet d’installer n8n.
1. Ouvrez un terminal.  
2. Tapez :  
   ```bash
   npm -v


### 📌 Étape 3 : Installer Docker (optionnel)

Docker permet de lancer n8n dans un conteneur isolé.
C’est pratique si vous ne voulez rien installer directement sur votre machine.

Téléchargez Docker Desktop sur docker.com
.

Installez-le.

Vérifiez avec :

docker --version


### 📌 Étape 4 : Créer un compte Gitpod (optionnel)

Gitpod permet de tester n8n directement dans le cloud (sans installation locale).

Allez sur gitpod.io
.

Créez un compte gratuit.

Lancez un nouvel espace de travail.

## 3️⃣ Lancer n8n

Il existe plusieurs façons de démarrer n8n selon vos préférences.

🚀 Avec npm (recommandé pour débutants)

Installez n8n globalement :

npm install n8n -g


Lancez n8n :

n8n


Ouvrez votre navigateur et accédez à :

http://localhost:5678

🐳 Avec Docker

Exécutez la commande suivante :

docker run -it --rm -p 5678:5678 n8nio/n8n


Puis ouvrez votre navigateur sur :

http://localhost:5678

☁️ Avec Gitpod

Dans votre terminal Gitpod :

n8n start --tunnel


Gitpod génère automatiquement un lien public pour accéder à n8n.

## 4️⃣ Créer votre premier workflow

Maintenant que n8n est lancé, vous allez créer un workflow simple.

Ouvrez le Dashboard n8n dans le navigateur.

Cliquez sur New Workflow.

Vous voyez un Start Node (c’est le point de départ).

Ajoutez un nouveau Node :

Cliquez sur le bouton +

Choisissez par exemple HTTP Request ou Webhook

Reliez le Start Node au nouveau Node en tirant une flèche.

Cliquez sur Execute Workflow pour tester.

👉 Exemple rapide :

Ajoutez un HTTP Request Node qui appelle https://jsonplaceholder.typicode.com/posts.

Exécutez le workflow et observez le résultat dans l’onglet Output.

## 5️⃣ Exemple concret : automatiser un email Gmail → Google Sheets

Voici un exemple complet pour comprendre la logique :

Ajoutez un Gmail Trigger Node pour capter l’arrivée d’un email.

Ajoutez un Google Sheets Node pour écrire une nouvelle ligne.

Reliez Gmail → Google Sheets.

Configurez les accès Google (OAuth).

Exécutez le workflow → chaque nouvel email ajoute une ligne dans votre feuille Google Sheets.

👉 Résultat : plus besoin de copier-coller vos emails, tout est automatique !

## 6️⃣ Sauvegarder et réutiliser vos workflows

Cliquez sur Save pour enregistrer votre workflow.

Donnez-lui un nom clair (ex : Mon premier workflow).

Vous pourrez l’ouvrir, l’éditer et le réutiliser à tout moment.

## 7️⃣ Conseils pratiques pour débutants

Commencez simple (2–3 nodes).

Testez vos workflows avec des exemples avant de les déployer.

Explorez les nodes intégrés (Gmail, Slack, Trello, Notion, etc.).

Consultez la documentation officielle
.

Posez vos questions sur le forum n8n
.

Sauvegardez vos workflows régulièrement.

🎉 Félicitations !

Vous avez installé n8n, appris à le lancer et créé votre premier workflow.
Vous êtes prêt à explorer des automatisations plus avancées 🚀.

👉 Prochaine étape : découvrir les intégrations populaires (Gmail, Slack, Google Sheets, Notion, etc.).