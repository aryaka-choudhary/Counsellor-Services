const express = require("express");
const authController = require('../controllers/auth');
const counsellorController = require('../controllers/counsellor');
const router = express.Router();

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/slots/:id', counsellorController.getSlots)
router.get('/bookSlot/:id', counsellorController.bookSlot)


module.exports = router