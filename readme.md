# AIWA Express.js Starter Kit

## A propos

AIWA Express.js Starter Kit est un template préconstruit pour démarrer rapidement des applications backend avec Express.js. Il inclut une structure organisée pour les routes, les services, et l'intégration avec des modèles d'IA comme Ollama.

## Structure du projet

```
express/
├── app.js                    # Point d'entrée de l'application Express
├── routes/                   # Routes Express
│   ├── index.js              # Route principale
│   └── ai/                   # Routes liées à l'IA
│       └── index.js          # Exemple d'intégration avec Ollama
├── services/                 # Services Express
│   └── aiService.js          # Service pour gérer les appels IA
├── package.json              # Dépendances et scripts du projet
├── .env                      # Variables d'environnement (clés API, etc.)
└── README.md                 # Documentation du projet
```

## Configuration

1. **Installer les dépendances**  
   Exécutez la commande suivante pour installer les dépendances nécessaires :
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement**  
   Créez un fichier `.env` à la racine du dossier `express/` et ajoutez vos clés API ou autres configurations nécessaires :
   ```env
   PORT=3000
   OLLAMA_API_URL=http://localhost:11434/api
   OPENAI_API_KEY=your_openai_api_key
   ```

3. **Configurer les routes**  
   Les routes principales sont définies dans le dossier `routes/`. Par exemple, les routes liées à l'IA se trouvent dans `routes/ai/index.js`.

## Démarrage

Pour démarrer le serveur Express.js, exécutez la commande suivante :
```bash
node app.js
```

Le serveur sera accessible par défaut sur [http://localhost:3000](http://localhost:3000).

## Structure des routes

- **Route principale** :  
  Défini dans `routes/index.js`. Exemple :
  ```javascript
  router.get('/', (req, res) => {
    res.send('Bienvenue dans AIWA Express.js Starter Kit');
  });
  ```

- **Routes IA** :  
  Défini dans `routes/ai/index.js`. Exemple :
  ```javascript
  router.post('/ollama', async (req, res) => {
    // Exemple d'appel à Ollama
  });
  ```

## Scripts disponibles

- **Démarrer le serveur** :  
  ```bash
  npm start
  ```

## Notes

- Assurez-vous que toutes les dépendances sont installées avant de démarrer le projet.
- Vérifiez que les services externes (comme Ollama) sont correctement configurés et accessibles.