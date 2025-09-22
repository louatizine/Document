---
icon: material/download
---

# Installation 🛠️

Bienvenue dans la section **Installation** de **n8n - Tunisian Edition** 🇹🇳  
Ici, nous allons voir comment installer et lancer **n8n** sur votre ordinateur ou serveur.  
Pas besoin d’être un expert en DevOps, suivez simplement les étapes 👇

---

## ✅ Prérequis techniques

Avant d’installer n8n, assurez-vous d’avoir :  

- **Node.js** version **18 ou plus récente** → [Télécharger Node.js](https://nodejs.org)  
- **npm** (fourni avec Node.js) ou **yarn** (optionnel)  
- **Un terminal / invite de commandes** (Windows, macOS, Linux)  

👉 Vérifiez vos versions :  

```bash
node -v
npm -v
```

---

### Installation via npm (recommandée pour débutants)

La méthode la plus simple consiste à utiliser npm.

#### Étape 1 : Installer n8n globalement

```bash
npm install -g n8n
```

#### Étape 2 : Lancer n8n

```bash
n8n
```

👉 Cela démarre une instance accessible sur :  
http://localhost:5678

---

### Installation via Docker (option avancée)

Si vous utilisez Docker, vous pouvez lancer n8n dans un conteneur.

#### Étape 1 : Télécharger l’image officielle

```bash
docker pull n8nio/n8n
```

#### Étape 2 : Lancer le conteneur

```bash
docker run -it --rm   -p 5678:5678   -v ~/.n8n:/home/node/.n8n   n8nio/n8n
```

👉 Cela démarre n8n sur http://localhost:5678 avec persistance des données dans `~/.n8n`.

---

### Utiliser n8n.cloud (zéro installation)

Si vous ne voulez rien installer, utilisez la version hébergée :  
👉 [https://n8n.cloud](https://n8n.cloud)

**Avantages :**

- Pas besoin de serveur ni de Docker  
- Toujours à jour  
- Hébergé et maintenu par l’équipe n8n  

---

### 🔑 Astuce : conserver vos workflows

Par défaut, si vous lancez n8n en mode simple (`n8n`), vos workflows sont stockés localement.  
Avec Docker, assurez-vous d’utiliser un volume (`-v ~/.n8n:/home/node/.n8n`) pour ne rien perdre.

---

### 🚨 Résolution de problèmes courants

**Commande n8n introuvable ?**  
→ Vérifiez que npm installe bien les paquets globalement (essayez `npx n8n`).

**Port déjà utilisé (5678) ?**  
→ Vérifiez si une autre instance n8n tourne déjà. Sinon lancez :  

```bash
n8n --port 5679
```

**Docker ne démarre pas ?**  
→ Vérifiez que Docker Desktop ou votre service Docker est bien en cours d’exécution.

---

### 🎯 Prochaines étapes

Bravo 🎉 vous avez installé n8n !  
Passons maintenant à la pratique avec votre **Premier Workflow** 👇

---

👉 Cette page est prête pour **`installation.md`**.  
Elle est **détaillée pour débutants**, avec explications, commandes, astuces et dépannage.