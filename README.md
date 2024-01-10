---------
Le projet avec Elasticsearch est fait pour le moment sur un tout autre projet que voici (pour être sur que tout fonctionne correctement) :
https://github.com/Leadersheepy/Elasticsearch_H3
--------
# H3_microservice
> Voici mon Readme qui résume ce que j'ai fait pour le devoir de microservice !

## Table des matières
1. [Résumé / Rapport mi-parcours](#résumé)
2. [Installation](#installation)
3. [Site](#site)
4. [Dockerfile](#Docker&Dockerfile)
5. [Test](#Test)
6. [Nginx](#Nginx)
7. [Prometheus](#prometheus)
8. [Rabbit](#Rabbit)
9. [Swagger](#Swagger)

## Résumé
> Rapport mi-parcours
### Description de mon projet
Mon projet est de créer une plateforme de présentation des livres que j'ai dans ma bibliothèque en utilisant HTML, Angular, et Postgres. On a accès à quatre pages, la page home avec tous les livres, une page détail qui affiche les données de mon livre, une page création et une page profil (par manque de temps pour réaliser tout le projet le site n'est pas complet)

### Les Techniques
* Frontend Angular / CSS / HTML 
* Backend avec Postgres
 + J'ai choisi une base de données relationnelle parce qu'elle est très bien pour organiser des données complexes et pour s'assurer que mes données sont correctes et cohérentes étant donné que je pars sur un site montrant des livres.

### Schéma architecture
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/25a4d0aa-b910-4d21-9956-fcd59b7249d0)

> Changement de dernière minute : J'ai du changer le port pour l'API c'est donc maintenant 5000 et non 3000

## Installation
```npm install```

```node server.js```

```ng serve```

```npm start```

## Site

### Front------- 
### Home
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/dd672f6f-c9ee-433a-b75e-e648f85acf0d)
### Detail d'un livre
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/afa8dc1b-b1c4-41a6-8151-80a1f7a33172)

### Back------
Postgres / node.js
### Exemple de base de données sur DBeaver
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/eba806d9-94b6-4fb5-983d-52b893a351bb)

### Schema 
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/157db7dd-766e-4722-a8a3-d71e869de563)

> Prometheus est sur le port 9090
> Postgres 5432

### Récupération des données qui fonctionne
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/3b64ba9c-407a-4d2a-8dd9-4e8e7801e7f3)


## Docker&DockerFile
Il y a bien deux fichiers dockerfile (une pour le back et l'autre pour le front) + un docker compose
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/02c316db-c296-4227-b0d5-55b8dd91efd3)
 
#### Docker Hub
https://hub.docker.com/repository/docker/marinouh/biblio/general
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/d8044522-bc8a-4839-a6ed-3f3222c21a78)

#### mon docker
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/72d2c0c6-8121-4206-856a-b7d01f64c95d)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/a972c1ba-ea38-45f2-8019-b1fc4e9ea2b2)

#### docker-swarm 
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/b38dcfbb-050e-40dd-9295-7648a32c397a)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/60c89f8e-9c38-454a-8e96-5c6922679470)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/1e0ea508-97b0-4a07-9230-08bcca315d69)


## Test
```chmod +x check_front.sh```

```sudo ./check_front.sh```

### Test front
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/e15326ce-2d4e-459f-a393-80a88648e951)

### Test container
![image](https://github.com/Leadersheepy/Docker_devoirMK/assets/43178189/a63aa49c-3f3d-4d9d-a3c1-cdd60cebdc35)

### Test back
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/ec5e777b-44cb-4b96-b3c9-6de586e58e42)

### Test BDD
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/51acc3b9-8797-4801-9015-88b42e318310)

### Test lors de l'envoi du projet
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/7ad4295e-7d52-468a-b8b5-c9c9c29edf94)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/f71d0177-01e0-4529-a70a-6b734e085c4a)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/02b76d2b-cd2f-4a8e-906a-4e4ac6d64f9f)


## Nginx
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/dee52193-0672-4657-b7cb-86fb36f953ee)

## Prometheus
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/73a592d2-b189-404a-a9c3-9bebee783e62)
![image](https://github.com/Leadersheepy/Docker_devoirMK/assets/43178189/8b2f17f6-8a89-4e9c-8a75-2db03d0acbad)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/545e6620-dd3c-4d1f-8a57-e3aea95ef2ac)
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/6cfe15a7-28ec-420f-9c46-514a84af9ca3)

## Rabbit
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/69dfc11f-e202-469d-b53e-c346869e1459)

## Swagger
http://localhost:5000/api-docs/#/
![image](https://github.com/Leadersheepy/H3_microservice/assets/43178189/a60f6719-ee7a-4424-b552-463a609de91c)

#### Déploiement & production 
- SSL et HTTPS : openssl ne s'installe pas sur mon pc
