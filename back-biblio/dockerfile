# Utiliser une image de Node.js comme base
FROM node:16-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances de l'application
RUN npm install

# Exposer le port pour accéder à l'application
EXPOSE 8081

# Démarrer le serveur 
CMD ["node", "server.js"]



