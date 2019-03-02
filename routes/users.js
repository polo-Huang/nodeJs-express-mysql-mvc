var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/getList', function(req, res, next) {
  	userController.getList(req, (result) => {
		res.json(result);
	});
});

module.exports = router;
