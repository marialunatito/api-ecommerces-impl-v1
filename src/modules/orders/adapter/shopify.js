const { PAYED, COMPLETED } = require("../../../core/constants");

const statusPage = (status) => {
    return status === PAYED ? COMPLETED : status;
}
module.exports = (payload) => {
    let orderList = [];
    payload.forEach(item => {
        orderList.push({
            channel: item.channel,
            cancelReason: item.cancel_reason,
            createdAt: item.created_at,
            currency: item.currency,
            gateway: item.gateway,
            idOrder: item.id,
            language: item.language,
            locationId: item.location_id,
            name: item.name,
            ownerNote:item.owner_note,
            paymentStatus: statusPage(item.payment_status),
            status:item.status,
            subtotal: item.subtotal,
            token: item.token,
            discount: item.discount,
            price: item.price,
            priceUSD: item.price_usd,
            weight: item.weight,
            updatedAt: item.updated_at,
            shippedAt: item.shipped_at,
            number: item.number,
            products: getProducts(item.products),
            storeFront: item.storefront,
            customer: {
                createdAt: item.customer.created_at,
                email: item.customer.email,
                id: item.customer.id,
                lastOrderId: item.customer.last_order_id,
                name: item.customer.name,
                totalSpent: item.customer.total_spent,
                totalSpentCurrency: item.customer.total_spent_currency,
                updatedAt: item.customer.updated_at
            }
        })
    })
    return orderList;
};

const getProducts = (products) => {
    let list =  [];
    products.forEach(element => {
        list.push({
            idProduct: element.product_id,
            price: element.price,
            quantity: element.quantity,
            freeShipping: element.free_shipping,
            idVariant: element.variant_id,
            weight: element.weight,
            width: element.width
        });
    });
    return list;
}