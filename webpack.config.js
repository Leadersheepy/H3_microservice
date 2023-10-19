const path = require('path'); // Importation du module 'path'

module.exports = {
    mode: 'development', // Mode de compilation de Webpack
    entry: './biblio/src/index.js', // Point d'entrée de l'application
    output: {
      filename: 'bundle.js', // Nom du fichier de sortie
      path: __dirname + '/biblio/dist' // Chemin de sortie du fichier de sortie
    }
  };