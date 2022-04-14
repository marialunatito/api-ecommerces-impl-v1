
module.exports = (payload) => {
    let orderList = [];
    payload.forEach(item => {
        orderList.push({
            channel: item.channel,
            cancelReason: item['cancel-reason'],
            createdAt: item['created-at'],
            currency: item.currency,
            gateway: item.gateway,
            idOrder: item.id,
            language: item.language,
            locationId: item['location-id'],
            name: item.name,
            ownerNote:item['owner-note'],
            paymentStatus:item['payment-status'],
            status:item.status,
            subtotal: item.subtotal,
            token: item.token,
            discount: item.discount,
            price: item.price,
            priceUSD: item['price-usd'],
            weight: item.weight,
            updatedAt: item['updated-at'],
            shippedAt: item['shipped-at'],
            number: item.number,
            products: getProducts(item.products),
            storeFront: item.storefront,
            customer: {
                createdAt: item.customer['created-at'],
                email: item.customer.email,
                id: item.customer.id,
                lastOrderId: item.customer['last-order-id'],
                name: item.customer.name,
                totalSpent: item.customer['total-spent'],
                totalSpentCurrency: item.customer['total-spent-currency'],
                updatedAt: item.customer['updated-at']
            }
        })
    })
    return orderList;
};

const getProducts = (products) => {
    let list =  [];
    products.forEach(element => {
        list.push({
            idProduct: element['product-id'],
            price: element.money,
            quantity: element.quantity,
            freeShipping: element['free-shipping'],
            idVariant: element['variant-id'],
            weight: element.weight,
            width: element.width
        });
    });
    return list;
}