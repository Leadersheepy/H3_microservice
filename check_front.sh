#!/bin/bash

if lsof -Pi :4200 -sTCP:LISTEN -t >/dev/null ; then
    echo "ng serve is running"
else
    echo "ng serve is not running"
fi