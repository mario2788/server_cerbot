#!/bin/bash

sudo chmod 777 /etc/letsencrypt/live/cysceuci.com-0002/fullchain.pem
sudo chmod 777 /etc/letsencrypt/live/cysceuci.com-0002/privkey.pem
sudo cp /etc/letsencrypt/live/cysceuci.com-0002/fullchain.pem ~/Ingress_uci/fullchain.pem
sudo cp /etc/letsencrypt/live/cysceuci.com-0002/privkey.pem ~/Ingress_uci/privkey.pem

