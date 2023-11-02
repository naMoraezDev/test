#!/bin/bash

cd /var/www/betting-dev.lancecorp.com.br

# build
docker compose build

# run
docker compose up -d
