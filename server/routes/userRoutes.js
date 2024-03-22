const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router.post('/login', userControllers.login);
router.post('/register', userControllers.register);
router.get('/getUser', jwtMiddleware, userControllers.getUsers);

module.exports = router;