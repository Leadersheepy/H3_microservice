const express = require('express');
const app = express();
const port = 3000; // Vous pouvez utiliser un port de votre choix
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur votre serveur API !' });
});
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

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

app.get('/livres', (req, res) => {
    connection.query('SELECT * FROM livres', (error, results, fields) => {
        if (error) {
            console.error('Erreur lors de la récupération des livres : ' + error.message);
            res.status(500).json({ message: 'Erreur serveur' });
            return;
        }

        res.json(results);
    });
});

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200', // Replace with your Angular app's domain
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/api/livres', cors(corsOptions), (req, res) => {
    // Handle GET request for /api/livres
});
//connection.end();