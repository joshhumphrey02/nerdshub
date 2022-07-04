const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()

router.get('/', controller.homepage);
router.get('/projects', controller.projects);
router.get('/sign_in', controller.sign_in);
router.get('/sign_up', controller.sign_up);
router.get('/about', controller.about);

module.exports = router;