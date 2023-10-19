// Importation des modules nécessaires
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const amqp = require('amqplib');
const connection2 = await amqp.connect('amqp://localhost');

const channel = await connection.createChannel();

// Connexion à RabbitMQ
const queueName = 'ma-file-dattente';
const message = 'Hello, RabbitMQ!';
channel.assertQueue(queueName);
channel.sendToQueue(queueName, Buffer.from(message));
channel.consume(queueName, (message) => {
  console.log(`Received message: ${message.content.toString()}`);
});

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marine',
    password: 'root123',
    database: 'livredb'
});

// Vérification de la connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});


// Configuration de l'application Express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());



// Définition des routes de l'API
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur votre serveur API !' });
});

app.get('/livres', (req, res) => {
    connection.query('SELECT * FROM livres', (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des livres : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }

        res.json(results);
    });
});

app.get('/livres/:id', (req, res) => {
    const bookId = req.params.id;
    connection.query('SELECT * FROM livres WHERE id = ?', [bookId], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération du livre : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }
        console.log('Récupération du livre par ID réussie.');
        res.json(results[0]);
    });
});

app.post('/livres', (req, res) => {
    const newBook = req.body;
    connection.query('INSERT INTO livres SET ?', newBook, (error, results) => {
        if (error) {
            console.error('Erreur lors de l ajout d un nouveau livre : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }
        console.log('Ajout d un nouveau livre réussi.');
        res.json({ message: 'Livre ajouté avec succès' });
    });
});

app.put('/livres/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;
    connection.query('UPDATE livres SET ? WHERE id = ?', [updatedBook, bookId], (error, results) => {
        if (error) {
            console.error('Erreur lors de la mise à jour du livre : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }
        console.log('Mise à jour du livre réussie.');
        res.json({ message: 'Livre mis à jour avec succès' });
    });
});

app.delete('/livres/:id', (req, res) => {
    const bookId = req.params.id;
    connection.query('DELETE FROM livres WHERE id = ?', [bookId], (error, results) => {
        if (error) {
            console.error('Erreur lors de la suppression du livre : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }
        console.log('Suppression du livre réussie.');
        res.json({ message: 'Livre supprimé avec succès' });
    });
});

// Démarrage du serveur
app.listen(5000, () => {
    console.log(`Serveur API en cours d'exécution sur le port ${port}`);
});

// Configuration de Swagger pour la documentation de l'API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


