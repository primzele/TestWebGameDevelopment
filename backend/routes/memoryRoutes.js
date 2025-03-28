const express = require('express');
const { saveGameData } = require('../controllers/memoryController');
const { fetchSaveHistory } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
router.get('/save/history/:userId', fetchSaveHistory);

module.exports = router;
