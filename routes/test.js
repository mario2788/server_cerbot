

const { Router } = require('express');
const router = Router();



const test_route = (req, res) => {
 
    res.json({
        resp: 'Servidor Operando - Test API'
    });
}


router.get('/', test_route );

module.exports = router;