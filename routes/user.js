var express = require('express');
var router = express.Router();
var user = require('../controllers/user')

router.get('/',
    user.getUser
)

router.post('/',
    user.createUser
)

router.put('/',
    user.editUser
)

router.delete('/',
    user.deleteUser
)

module.exports = router