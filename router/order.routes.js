const express = require('express')

const asyncHandle = require('../helpers/asyncHandler')
const OrderController = require('../controller/order.controller')
const { checkRole } = require('../middleware/checkLogin')
const router = express.Router()

router.post('/membership', asyncHandle(OrderController.orderMembership))
router.post('/desk', asyncHandle(OrderController.orderTable))
router.use(checkRole)
router.get('/membership', asyncHandle(OrderController.getListOrderMembership))
router.post('/membership/accept/:id', asyncHandle(OrderController.acceptOrderMembership))

module.exports = router