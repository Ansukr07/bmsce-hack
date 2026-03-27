const express = require('express');
const { queryChatbot } = require('../controllers/chatbotController');

const router = express.Router();

router.post('/query', queryChatbot);

module.exports = router;
