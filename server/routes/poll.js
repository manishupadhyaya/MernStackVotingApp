const router = require('express').Router()

const handle = require('../handler/index')

const auth = require('../middleware/auth')

router.route('/').get(handle.showPolls) //Show Everything
    .post(auth, handle.createPolls)

router.get('/user', auth, handle.userPolls)

router
.route('/:id')
.get(handle.getPoll)
.post(auth, handle.vote)
.delete(auth, handle.deletePoll)

module.exports = router