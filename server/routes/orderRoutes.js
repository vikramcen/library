const router = require("express").Router();
const {
	createNewOrderController,
	getAllOrdersController,
	updateOrderStatusController,
	getAllOrdersByUserController,
	downloadOrderReportController,
	getOrderById,
} = require("../controllers/orderController");
const checkAuth = require("../middlewares/authMiddleware");
const checkAdminAuth = require("../middlewares/adminAuthMiddleware");

// download order reports
router.get(
	"/download-order-reports",
	// checkAdminAuth,
	downloadOrderReportController
);

// get all orders
router.get("/", checkAdminAuth, getAllOrdersController);

router.get("/get-by-id/:id", getOrderById);


router.get("/by-user", checkAuth, getAllOrdersByUserController);

// create new order
router.post("/", checkAuth, createNewOrderController);

// update order status
router.patch("/update-status/:id", checkAdminAuth, updateOrderStatusController);

module.exports = router;
