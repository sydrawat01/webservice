const express = require('express')

const router = express.Router()
const { health } = require('../controllers/health.controller')

router.get('/healthz', health)

module.exports = router
