var express = require('express');
var router = express.Router();
var { fetch, create, update, remove } = require('../Controller/bikeController');
/* GET users listing. */
router.get('/', fetch);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);
module.exports = router;
