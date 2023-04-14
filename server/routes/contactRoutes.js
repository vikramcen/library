const {
	sendContactMessageController,
	getAllContactMessagesController,
} = require("../controllers/contactController");

const router = require("express").Router();

// send contact message
router.post("/", sendContactMessageController);

router.get("/", getAllContactMessagesController);

module.exports = router;
