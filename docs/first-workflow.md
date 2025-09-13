# 🎬 Premier Workflow avec n8n

Bienvenue dans la section **First Workflow** de **n8n - Tunisian Edition** 🇹🇳  
Ici, vous allez créer votre **premier workflow simple**, étape par étape, même si vous n’avez jamais utilisé n8n.

---

## 🎯 Objectif

Créer un workflow qui envoie automatiquement un message dans Slack chaque matin avec la météo du jour.  

**Nœuds utilisés :**  
1. Cron Trigger → déclenche le workflow tous les jours à 9h.  
2. HTTP Request → récupère les données météo depuis une API.  
3. Slack → envoie le message dans un canal.  

---

## 1️⃣ Étape 1 : Créer un nouveau workflow

1. Ouvrez l’interface n8n : [http://localhost:5678](http://localhost:5678)  
2. Cliquez sur **New Workflow**  
3. Donnez un nom à votre workflow, par exemple : `Météo quotidienne`  

---

## 2️⃣ Étape 2 : Ajouter un Cron Trigger

1. Cliquez sur **+** pour ajouter un nœud  
2. Choisissez **Cron**  
3. Configurez-le pour s’exécuter **tous les jours à 9h**  
4. Cliquez sur **Execute Node** pour tester  

---

## 3️⃣ Étape 3 : Ajouter un HTTP Request

1. Cliquez sur **+** et ajoutez un nœud **HTTP Request**  
2. Dans **HTTP Method**, choisissez **GET**  
3. Entrez l’URL d’une API météo gratuite, par exemple :  

https://api.open-meteo.com/v1/forecast?latitude=36.8&longitude=10.2&daily=temperature_2m_max&timezone=auto

4. Cliquez sur **Execute Node** pour tester et voir les données récupérées  

---

## 4️⃣ Étape 4 : Ajouter un nœud Slack

1. Cliquez sur **+** et ajoutez un nœud **Slack**  
2. Connectez votre compte Slack via OAuth  
3. Configurez le canal et le message, par exemple :  
4. Cliquez sur **Execute Node** pour tester  

---

## 5️⃣ Étape 5 : Connecter les nœuds

1. Connectez **Cron Trigger → HTTP Request → Slack**  
2. Vérifiez que tous les liens sont corrects et que les nœuds sont activés  

---

## 6️⃣ Étape 6 : Exécuter et tester le workflow

- Cliquez sur **Execute Workflow**  
- Vérifiez que le message arrive bien dans Slack  

---

## ✅ Résultat attendu

Chaque matin à 9h, votre équipe reçoit automatiquement la météo du jour dans le canal Slack configuré.  

---

## 💡 Astuces pour débutants

- Testez chaque nœud individuellement avant de connecter tout le workflow  
- Nommez vos nœuds pour mieux vous y retrouver  
- Utilisez **Node-RED style** : connectez visuellement, c’est plus simple que d’écrire du code  

---

## 🎯 Prochaines étapes

- Essayez de remplacer Slack par un **email via Gmail**  
- Testez avec d’autres API (COVID, actualités, crypto…)  
- Explorez les autres nœuds n8n pour automatiser vos tâches quotidiennes  

---
