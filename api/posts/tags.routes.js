const express = require('express');
const { tagsCreate, tagsGet } = require('./tags.controllers');
const router = express.Router();



router.post('/', tagsCreate);
router.get('/', tagsGet);


module.exports = router;
