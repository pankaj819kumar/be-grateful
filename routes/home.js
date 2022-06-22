const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');  // importing functions

router.get('/', homeController.home);
router.post('/add-journal', homeController.addJournal);
router.delete('/', homeController.deleteJournal);
router.put('/', homeController.updateJournal);


module.exports = router;
