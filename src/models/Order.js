const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    size: {
        type: String
    },
    delivery: {
        type: String
    },
    address: {
        type: String,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order
};