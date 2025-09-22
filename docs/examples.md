---
icon: material/lightbulb-on
---

# 🔄 Exemples de Workflows n8n

Bienvenue dans la section **Examples** de **n8n - Tunisian Edition** 🇹🇳  
Ici, vous trouverez plusieurs workflows pratiques à copier, modifier et tester.  

---

## 1️⃣ Automatisation Email → Slack

**Objectif :** Notifier votre équipe sur Slack lorsqu’un nouvel email arrive dans Gmail.  

**Nœuds utilisés :**  
- Gmail Trigger → surveille la boîte email  
- Slack → envoie le message dans un canal  

**Astuce :** parfait pour centraliser toutes les notifications importantes dans Slack.

---

## 2️⃣ Sauvegarde de fichiers dans Google Drive

**Objectif :** Télécharger automatiquement les fichiers d’un FTP et les sauvegarder dans Google Drive.  

**Nœuds utilisés :**  
- FTP → récupère les fichiers  
- Google Drive → stocke les fichiers dans le dossier choisi  

**Astuce :** idéal pour automatiser les backups réguliers.

---

## 3️⃣ Récupération de données API → Google Sheets

**Objectif :** Extraire les données d’une API et les stocker dans Google Sheets.  

**Nœuds utilisés :**  
- HTTP Request → récupère les données de l’API  
- Google Sheets → insère les données dans la feuille  

**Astuce :** utile pour créer des dashboards automatisés ou suivre des statistiques en temps réel.

---

## 4️⃣ Monitoring et alertes

**Objectif :** Vérifier l’état d’un service toutes les heures et envoyer une alerte SMS si nécessaire.  

**Nœuds utilisés :**  
- HTTP Request → ping de l’API ou du site  
- IF Node → vérifie la réponse  
- Twilio → envoie un SMS si le service est indisponible  

**Astuce :** pratique pour la surveillance automatisée de vos systèmes.

---

## 📺 Chaînes YouTube utiles pour apprendre n8n

Voici quelques chaînes qui proposent des tutoriels, des exemples et des workflows détaillés :  

1. **[n8n.io](https://www.youtube.com/c/n8nio)** → Chaîne officielle avec des guides et webinars.  
2. **[Automation Step by Step](https://www.youtube.com/c/AutomationStepByStep)** → Bon contenu sur automatisations et workflows.  
3. **[Tech With Tim](https://www.youtube.com/c/TechWithTim)** → Tutoriels sur API, Python et intégrations avec n8n.  
4. **[Code with Mosh](https://www.youtube.com/c/programmingwithmosh)** → Pas uniquement n8n, mais très utile pour comprendre les API et automatisations.  
5. **[FreeCodeCamp](https://www.youtube.com/c/Freecodecamp)** → Exemples de projets automatisés et intégrations API.  

---

## 💡 Astuces pour explorer les exemples

- Essayez d’**adapter les workflows** à vos besoins : changez le canal Slack, la feuille Google Sheets ou l’API.  
- Testez chaque nœud individuellement avant de connecter tout le workflow.  
- Utilisez les fonctionnalités **Execute Node** et **Debug** pour vérifier vos données.  

---

## 🎯 Prochaines étapes

- Explorez les workflows officiels de n8n : [https://n8n.io/workflows](https://n8n.io/workflows)  
- Passez à la section **Resources** pour compléter vos connaissances et obtenir plus de guides et liens utiles.  
