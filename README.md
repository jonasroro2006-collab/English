# English Jonas V2

Application PWA d'apprentissage de l'anglais A1→C2, conçue pour fonctionner hors ligne.

## Fichiers (à mettre tous à la racine du dépôt)

* index.html : structure de l'application
* style.css : design responsive + mode sombre
* data.js : niveaux, leçons, **360 questions** (5 par leçon, aucune répétée) et dictionnaire
* app.js : logique (quiz, vies, série, progression, récompenses)
* manifest.json : installation PWA
* service-worker.js : cache hors ligne
* icon-192.png, icon-512.png, icon-maskable-512.png : icônes de l'application

## Installation GitHub Pages

1. Créer un dépôt GitHub.
2. Envoyer tous les fichiers à la racine.
3. Settings → Pages → Deploy from branch → main / root.
4. Ouvrir l'adresse Pages et installer l'application depuis le navigateur.

## Ajouter ou modifier des questions

Tout se fait dans `data.js`. Une question = `["énoncé","BONNE réponse","faux 1","faux 2","faux 3"]`.
La bonne réponse est toujours en 2e position : l'appli mélange les choix toute seule.

## Mettre à jour l'application en ligne

Après avoir modifié des fichiers, change le numéro dans `service-worker.js`
(`englishjonas-v3` → `englishjonas-v4`) pour que les téléphones récupèrent la nouvelle version.

## Important

Les données sont stockées dans localStorage sur l'appareil. Aucun compte ni serveur n'est requis.
La progression de l'ancienne version est reprise automatiquement.
