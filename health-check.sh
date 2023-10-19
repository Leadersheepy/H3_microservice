#!/bin/bash

if docker ps --filter "name=biblio" --filter "name=back-biblio" | grep -q "Up"; then
    echo "All containers are running"
    exit 0
else
    echo "One or more containers are not running"
    exit 1
fi