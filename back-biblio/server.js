const express = require('express');
const app = express();
const port = 3000; // Vous pouvez utiliser un port de votre choix
app.use(express.json());

// Route racine pour accueillir les visiteurs
app.get('/', (req, res) => {
    res.json({message: 'Bienvenue sur votre serveur API !'});
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur API en cours d'exécution sur le port ${port}`);
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marine',
    password: 'root123',
    database: 'livredb'
});

// Connexion à la base de données MySQL
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

const cors = require('cors');

const corsOptions = {
    origin: '*', // Remplacez par le domaine de votre application Angular
    optionsSuccessStatus: 200 // Certains navigateurs anciens (IE11, divers SmartTVs) gèrent mal le code 204
};

// Récupération de tous les livres depuis la base de données
app.get('/livres', cors(corsOptions), (req, res) => {
    connection.query('SELECT * FROM livres', (error, results, fields) => {
        if (error) {
            console.error('Erreur lors de la récupération des livres : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }

        res.json(results);
    });
});

// Récupération d'un livre par son ID depuis la base de données
app.get('/livres/:id', cors(corsOptions), (req, res) => {
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

// Ajout d'un nouveau livre dans la base de données
app.post('/livres', cors(corsOptions), (req, res) => {
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

// Mise à jour d'un livre existant dans la base de données
app.put('/livres/:id', cors(corsOptions), (req, res) => {
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

// Suppression d'un livre par son ID depuis la base de données
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
