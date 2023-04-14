const ContactUs = require("../models/ContactUs");

// send contact message controller
const sendContactMessageController = async (req, res) => {
	try {
		const { name, email, phone, message } = req.body || {};

		const newEnquiry = new ContactUs({ name, email, phone, message });
		await newEnquiry.save();
		res.status(200).json({ success: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Server error occurred",
		});
	}
};

// get all contact messages controller
const getAllContactMessagesController = async (req, res) => {
	try {
		const contactMessages = await ContactUs.find();
		res.status(200).json(contactMessages);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Server error occurred",
		});
	}
};

module.exports = {
	sendContactMessageController,
	getAllContactMessagesController,
};
