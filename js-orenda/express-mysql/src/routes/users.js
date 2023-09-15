
const express = require('express')

const router = express.Router();

const userController = require('../controller/users.js')


module.exports = router;

// CREATE - POST
router.post('/', userController.createNewUser)
// READ - GET
router.get('/', userController.getALLUsers)

// UPDATE _ PATCH
router.patch('/:idUser', userController.updateUser)

// DELETE - DELETE
router.delete('/:idUser', userController.deleTeUser)




