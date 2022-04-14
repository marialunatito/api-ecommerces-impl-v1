const Service = require('./Service');
const Message = require('../../core/util/Message');
const Constant = require('../../core/constants');
const Response = require('../../core/util/Response');
const ResponseError = require('../../core/util/ResponseError');

class OrdersController {
    //PARAMETRO DE ENTRADA FORCE ES UN EJEMPLO PARA LA PRUEBA UNITARIA (CASUISTICA DE ERROR) USUALMENTE CAERIA EN ERROR POR LA INVOCACIÓN AL API
    static async handler(event, context, callback, force) { 
        let result;
        try {
            if(force){
                throw { type:"NOT FOUND", code: 500, message: 'NOT FOUND /SHOPIFY'}
            };
            result = await Service.processOrders();
            
        } catch (error) {
            let message = new Message({
                title: Constant.SERVER_ERROR.title,
                code: Constant.SERVER_ERROR.code,
                description: Constant.SERVER_ERROR.description,
                technicalDetail: error.type + ' - ' + error.code + ' - ' + error.message
            });
            result = new ResponseError({message: message});
        }
        return Response.getFormatResponse(result);
    }

}

module.exports = OrdersController;
