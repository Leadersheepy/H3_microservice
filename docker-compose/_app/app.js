// Importer les modules nécessaires
const express = require('express'); // Express.js pour le serveur web
const redis = require('redis'); // Le client Redis pour la gestion de la base de données

// Créer une instance d'Express
const app = express();

// Créer une instance du client Redis pour se connecter au conteneur Redis
const client = redis.createClient({ host: 'redis-container', port: 6379 });

// Définir une route pour l'accès à la racine de l'application
app.get('/', (req, res) => {
  // Incrémenter le compteur 'hits' dans Redis
  client.incr('hits', (err, reply) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur interne du serveur');
    }

    // Obtenir la valeur actuelle du compteur 'hits' dans Redis
    client.get('hits', (err, value) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erreur interne du serveur');
      }

      // Envoyer la réponse au client avec le nombre de vues
      res.send(` - - - Cette page web de base a été consultée ${value} fois - - -`);
    });
  });
});

// Écouter sur le port 3000 et l'adresse '0.0.0.0' pour accepter les connexions de l'extérieur
app.listen(3000, '0.0.0.0', () => {
  console.log('Le serveur fonctionne sur le port 3000');
});
