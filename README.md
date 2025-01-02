# 📚 Ma Bibliothèque

**Ma Bibliothèque** est une application de gestion de collection de livres construite avec React. 

Projet effectué pour l'UE WE du Master IL de l'ISTIC.
Le thème du sujet (Bières) a été modifié pour que le projet figure dans le portfolio professionel 

Elle vous permet de gérer votre bibliothèque personnelle en ajoutant, modifiant et supprimant des livres, tout en suivant les informations comme l'auteur, le genre et la note.

## 🚀 Fonctionnalités

- **Ajouter un livre** : Vous pouvez ajouter un livre à votre collection avec son titre, auteur, genre et note.
- **Supprimer un livre** : Vous pouvez supprimer un livre de votre collection.
- **Gestion des notes** : Attribuez une note (de 0 à 10) à chaque livre.
- **Page "À propos"** : Découvrez des informations sur l'auteur du projet et accédez à son GitHub.

## 🛠️ Technologies utilisées

- **Frontend** : React.js (avec Hooks et Typescript)
- **Routing** : React Router Dom
- **CSS** : Styles personnalisés dans `App.css`, `BookList.css`, et `About.css`

## 📂 Structure du projet

```plaintext
Ma-Bibliotheque/
├── src/
│   ├── components/
│   │   ├── About.tsx          # Composant "À propos"
│   │   ├── BookList.tsx       # Composant de gestion des livres
│   ├── App.tsx                # Point d'entrée de l'application
│   ├── App.css                # Styles globaux
├── public/                    # Dossier public
│   ├── index.html             # Fichier HTML principal
├── package.json               # Dépendances et scripts
└── README.md                  # Documentation
```

## 🖥️ Installation et démarrage du projet

Suivez les étapes ci-dessous pour cloner ce projet et le faire fonctionner sur votre machine locale.

  1. Clonez le dépôt Git en utilisant la commande suivante :
   
   ```bash
   git clone https://github.com/mathisglt/Ma-Bibliotheque
   ```
   
   2. Rendez vous dans le dossier
   
   ```bash
   cd .\Ma-Bibliotheque\
   ```
   
   3. Installez les dépendances
   
   ```bash
   npm i 
   ```
   
   4. Enfin, démarrer le projet
   
   ```bash
   npm run start
   ```
