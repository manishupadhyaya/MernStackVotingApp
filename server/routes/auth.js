const router = require('express').Router()

const handle = require('../handler/index.js')

router.post('/register', handle.register)

router.post('/login', handle.login)



module.exports = router