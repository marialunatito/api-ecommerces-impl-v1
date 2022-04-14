const ServiceDao = require('./Service.dao');

module.exports.processOrders = async (payload) => {
    console.log('----Controller: processOrders----');
    return ServiceDao.processOrders(payload);
};
