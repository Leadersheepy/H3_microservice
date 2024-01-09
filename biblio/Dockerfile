# Étape 1 : Construction de l'application Angular
FROM node:16-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY package.json .
COPY package-lock.json .

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Compiler l'application
RUN npm run build

# Étape 2 : Création de l'image de production
FROM nginx:alpine

# Copier les fichiers de l'application compilée depuis l'étape de construction
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
