const express = require('express');
const userModel = require('../models/user.model');

module.exports = {
	getList: function(req, callback) {
		queryData = JSON.stringify(req.query);
		console.log(queryData);
		var data = null;
		userModel.getAll(data, function(result) {
			var list = result.rows;
			callback(list);
		})
	},
}