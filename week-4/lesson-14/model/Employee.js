const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
});

// Mongoose will automatically look for the plural, lowercase version of the model name
// e.g. "Employee" is for the "employees" collection in Mongo
module.exports = mongoose.model("Employee", employeeSchema);
