#!/bin/bash

# Paramètres de la base de données
DB_USER="myuser"
DB_PASS="mypassword"
DB_HOST="localhost"
DB_NAME="postgres"

# Essayer de se connecter à la base de données
export PGPASSWORD=$DB_PASS
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c '\q'

# Vérifier si la connexion a réussi
if [ $? -eq 0 ]; then
    echo "La BDD est vivante !!"
else
    echo "Failed to connect to the database"
fi