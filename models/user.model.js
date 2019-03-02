const model = require('../models/model');
const tableName = 'users';

module.exports = {
	getAll: function(data, callback) {
		var selectFields = '*';
		var	fromTable = tableName;
		var hasWhere = false;
		model.selectQuery(selectFields, fromTable, hasWhere, null, function(result) {
			callback(result);
		})
	},
}