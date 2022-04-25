const ecommercesData = require('../../core/api/ecommercesData');
const api = require('../../core/api/invoke');
const { COMPLETED } = require('../../core/constants');
const adapter = require('./adapter');

module.exports.processOrders = async (payload) => {
    console.log('----Service Dao: processOrders----');
    let adapterEcommers = [];
    let response = {};
    const [shopify, woocommerce] = await Promise.all([
        api.invoke(ecommercesData.Shopify),
        api.invoke(ecommercesData.Woocommerce)
    ]);

    adapterEcommers = adapterEcommers.concat(
        adapter.shopify(shopify),
        adapter.woocommerce(woocommerce)
    );
    
    let orderCustomer = await orderByCustomer(adapterEcommers);
    let orderProcess = {
        total_billing: 0,
        people:[]
    }
    orderCustomer.map((customer, i) => {
        adapterEcommers.forEach(order => {
            if(customer.id === order.customer.id){
                if (COMPLETED === order.paymentStatus){
                    orderCustomer[i].avg_ticket += parseFloat(order.price);
                    orderProcess.total_billing += parseFloat(order.price);
                    orderCustomer[i].quantity_orders += 1 
                }
            }
        });
    });

    orderCustomer.forEach(customer => {
        customer.avg_ticket /= customer.quantity_orders
    });
    orderProcess.people = orderCustomer;
    response = orderProcess
    
    return response;
};

const orderByCustomer = async (orders) => {
    const key = 'id';
    const customersListUnique = [...new Map(orders.map(item =>
      [item.customer[key], {
        id: item.customer.id, 
        name: item.customer.name,
        email: item.customer.email, 
        quantity_orders: 0,
        avg_ticket: 0}])).values()];

    return customersListUnique;
}