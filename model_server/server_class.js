
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


class ServerClass {

    constructor() {

        // Servidor
        this.app = express();
        this.port = 60222;

        // Rutas generales
        this.file = '/file';
        this.test = '/test';

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors({
            origin: '*'
        }));

        // Lectura y parseo del body
        this.app.use( bodyParser.json({ limit: '10mb' }) );
        this.app.use( bodyParser.urlencoded({ extended: true, limit: '10mb' }) );
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use( this.test, require('../routes/test') ),
        this.app.use( this.file, require('../routes/file') )
        
        // this.app.use( this.clinitPrinted, require('../routes/clinitPrinted') )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log("\n\n  *** Server Apps *** ");
            console.log("\n   Port : ", this.port, "\n\n");
        });
    }

}

module.exports = ServerClass
