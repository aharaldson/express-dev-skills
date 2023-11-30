var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');
const Skill = require('../models/skill');

/* GET skills listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
