const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const appConfig = require("../configs/app");

const query = function(sql, data, callback) {
	mysql.createPool(appConfig.mysql).getConnection(function(err, connection) {
		connection.query(sql, data, function(err, rows, fields) {
			var result = {
				err: err, 
				rows: rows,
				fields: fields
			}
			callback(result);
		});
	});
}

module.exports = {
	selectQuery: function(selectFields, fromTable, hasWhere, whereData, callback) {
		var sql, data;
		if (hasWhere) {
			sql = 'SELECT ' + selectFields + ' FROM ' + fromTable + ' WHERE ?';
		} else {
			sql = 'SELECT ' + selectFields + ' FROM ' + fromTable;
		}
		query(sql, whereData, function(result) {
			callback(result);
		});
	}
}