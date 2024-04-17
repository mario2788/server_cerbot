


const { Router } = require('express');
const router = Router();
const path = require('path');



const send_file = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'name.txt'));
}


router.get('/*', send_file );



module.exports = router
