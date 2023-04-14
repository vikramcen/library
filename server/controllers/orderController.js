const Order = require("../models/Order");
const User = require("../models/User");
const pdfMake = require("pdfmake");
const pdf = require("html-pdf");
const jsPDF = require("jspdf");
const PDFDocument = require("pdfkit");
const sendMail = require("../services/emailService");
const orderTemplate = require("../services/orderTemplate");
const orderReportsTemplate = require("../services/orderReportsTemplate");

const stripe = require("stripe")(
	"sk_test_51LRnDyH3L9RCLevZoGrUbNqVAl445o6nt2MVPw8bwOyvYbJbQV5AKDsQ2Hj4XEG2Mhz6aiYtMZpj8KryafbcZVue00ebStF5jd"
);

// get all order controller
const getAllOrdersController = async (req, res) => {
	try {
		const orders = await Order.find().sort({ updatedAt: -1 }).populate("user");
		res.status(200).json(orders);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "server error occurred",
		});
	}
};

// get all orders by user controller
const getAllOrdersByUserController = async (req, res) => {
	try {
		const { _id } = req.user || {};
		const orders = await Order.find({ user: _id })
			.sort({ updatedAt: -1 })
			.populate("user");
		res.status(200).json(orders);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "server error occurred",
		});
	}
};

// create new order controller
const createNewOrderController = async (req, res) => {
	try {
		const { totalPrice, totalQty, books, stripeToken, order } = req.body || {};
		const { _id } = req.user || {};

		// create new order
		const newOrder = new Order({
			user: _id,
			totalPrice,
			totalQty,
			books,
			orderDate: Date.now(),
		});

		await newOrder.save();
		if (newOrder?._id && stripeToken) {
			const payment = await stripe.paymentIntents.create({
				amount: Number(totalPrice) * 100,
				currency: "USD",
				description: "this is payment description",
				payment_method: stripeToken,
				confirm: true,
			});

			if (payment) {
				// update user data
				await User.findByIdAndUpdate(_id, { $set: req.body });

				// send email
				// sendMail({
				//   from: process.env.ADMIN_EMAIL,
				//   to: email,
				//   subject: "Your order confirmation email.",
				//   html: orderTemplate({
				//     order,
				//     customer: `${firstName} ${lastName}`,
				//     adminEmail: process.env.ADMIN_EMAIL,
				//   }),
				// });
				res.status(201).json(newOrder);
			} else {
				res.status(500).json({
					error: "Payment failed",
				});
			}
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({
			erro: "Server error occurred",
		});
	}
};

// udpate order status controller
const updateOrderStatusController = async (req, res) => {
	try {
		const { id } = req.params || {};
		const { status } = req.body || {};

		const updatedOrder = await Order.findByIdAndUpdate(
			id,
			{ $set: { status } },
			{ new: true }
		);
		res.status(200).json(updatedOrder);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Server error occurred",
		});
	}
};

// get order by id
const getOrderById = async (req, res) => {
	try {
		const { id } = req.params || {};
		const order = await Order.findById(id).populate("user");

		if (!order) {
			return res.status(404).json({
				error: "Order not found",
			});
		}

		res.status(200).json(order);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Server error occurred",
		});
	}
};

// download order report controller
const downloadOrderReportController = async (req, res) => {
	try {
		const orders = await Order.find().sort({ updatedAt: -1 }).populate("user");

		// Create the HTML content for the PDF
		const html = orderReportsTemplate(orders);

		// Create the PDF document
		const options = {
			format: "Letter",
		};
		pdf.create(html, options).toStream((err, stream) => {
			if (err) {
				return res.status(500).json({ message: err.message });
			}
			res.setHeader("Content-Type", "application/pdf");
			res.setHeader(
				"Content-Disposition",
				`attachment; filename=order-maruf.pdf`
			);
			stream.pipe(res);
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Server error occurred",
		});
	}
};

module.exports = {
	getAllOrdersController,
	getAllOrdersByUserController,
	createNewOrderController,
	updateOrderStatusController,
	downloadOrderReportController,
	getOrderById,
};
