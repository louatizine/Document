---
icon: material/book-open-variant
---

# Introduction à n8n 🚀

Bienvenue dans la documentation **n8n - Tunisian Edition** 🇹🇳  

n8n est un outil **open source** d’automatisation de flux de travail (*workflow automation*).  
Il permet de connecter différentes applications et API entre elles afin d’automatiser des tâches répétitives, gagner du temps et améliorer la productivité.

---

## 🌟 Qu’est-ce que n8n ?

Le nom **n8n** vient de l’anglais *“nodemation”* (Node + Automation).  
C’est un outil **visuel** où chaque automatisation est représentée sous forme de **workflow** composé de **nœuds** (nodes).  

Chaque **nœud** représente une action :  
- 🔗 Se connecter à une application (Gmail, Slack, Google Sheets, etc.)  
- 📡 Récupérer ou envoyer des données via une API  
- 🧹 Traiter ou transformer des informations (ex: nettoyer du texte, exécuter une fonction JS)  
- ⏰ Déclencher un événement (nouvel email reçu, nouveau fichier, etc.)  

---

## 🤔 Pourquoi utiliser n8n ?

- ✅ **Open Source & Self-hosting** : Gardez le contrôle de vos données.  
- 🔑 **Gestion sécurisée des identifiants** : Stockez vos clés API et tokens de manière chiffrée.  
- ⚡ **350+ intégrations natives** : Connectez facilement vos services préférés.  
- 🖥️ **Interface visuelle intuitive** : Construisez vos automatisations sans coder.  
- 🔄 **Extensible** : Créez vos propres nœuds personnalisés.  

---

## 📌 Cas d’utilisation courants

Voici quelques exemples où **n8n** peut vous aider :  

1. **Automatiser la communication**  
   - Lorsqu’un client remplit un formulaire → envoyer automatiquement un email de confirmation et notifier l’équipe sur Slack.  

2. **Collecter et traiter des données**  
   - Extraire des données d’une API → les stocker dans Google Sheets ou une base MongoDB.  

3. **Sauvegarde et archivage**  
   - Sauvegarder régulièrement des fichiers depuis un FTP → les envoyer sur Google Drive.  

4. **Monitoring et alertes**  
   - Vérifier toutes les heures l’état d’un service → envoyer une alerte SMS si une erreur est détectée.  

---

## 🛠️ Exemple simple

Un workflow basique pourrait être :  

- **Nœud 1 : Cron Trigger** → s’exécute tous les jours à 9h.  
- **Nœud 2 : HTTP Request** → appelle une API météo.  
- **Nœud 3 : Slack** → envoie le rapport météo du jour dans un canal.  

👉 Résultat : Chaque matin, votre équipe reçoit automatiquement la météo du jour 🌤️  

---

## 🎯 Et après ?

Maintenant que vous connaissez les bases de **n8n**, passons à la section suivante 👉 [Getting Started](getting-started.md)  
