#!/bin/sh


sudo docker run -it --rm --name server-cerbot \
-v ./:/server -w /server --network host \
node:20-alpine3.17  /bin/ash
