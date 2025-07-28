Crear certificado con Certbot:
https://certbot.eff.org/instructions?ws=other&os=ubuntufocal

** Instalar certbot
    $ sudo apt  install certbot -y
** Es necesario contar con una IP que pueda responder con dos archivos que representan las claves proporcionadas por CERTBOT.

** Comando a ejecutar
   $ sudo certbot certonly --manual

** Seguir las instrucciones, dar correo y dominio:
    Ejemplo : https://uci.cysce.com/coc/panel/uci/ => *.uci.cysce.com

** Exponer el txt con el nombre y contenido que da CERTBOT
    Ejemplo: _acme-challenge.cysce.com.txt => E2vyyRGLP3gZSWZumhtjd4Dh1EWlrqvLbY79zY6ARb4

** Crear la ruta con el servidor para servir el archivo según la ruta que especifica certbot.

** Copiar los certificados:
-fullchain.pem y privkey.pem
en nginx :/data/nginxconf/secure/cysce

