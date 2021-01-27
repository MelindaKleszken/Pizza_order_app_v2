const mongoose = require('mongoose');
require("./db/connection");
const {Order} = require('./models/Order.js');


//Map global promise - get rid of warning
//mongoose.promise = global.Promise;



//Add Order
const addOrder = (order) => {
     Order.create(order)
     .then(order => {
        console.info('New order added');
        //order.save();
        mongoose.connection.close();
    })
    .catch(error => {
        return[];
    });
};

//Find Order
const findOrder = (name) => {
    // make case insensitive
    const search = new RegExp(name, 'i');
    Order.find({$or: [{name: search}, {size:search}]})
    .then(order => {
        console.info(order);
        console.info(`${order.length} matches`);
        mongoose.connection.close();
    })
};

//update order
const updateOrder = (_id, order) => {
    Order.updateOne( {_id}, order)
    .then(order => {
        console.info('Order updated');
        mongoose.connection.close();
    });
};

//remove order
const removeOrder = (_id) => {
    Order.remove( {_id})
    .then(order => {
        console.info('Order removed');
        mongoose.connection.close();
    });
};

//list all orders
const listOrders = () => {
    Order.find()
        .then(orders => {
            console.info(orders);
            console.info(`${orders.length} orders`);
            mongoose.connection.close();
        });
};

//export all methods

module.exports = {
    addOrder,
    findOrder,
    updateOrder,
    removeOrder,
    listOrders
}