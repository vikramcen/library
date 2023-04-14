const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
	{
		name: String,
		email: String,
		phone: String,
		message: String,
	},
	{ timestamps: true }
);

const ContactUs = model("Contact_us", contactSchema);

module.exports = ContactUs;
