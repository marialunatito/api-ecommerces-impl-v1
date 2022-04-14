class Response{
    constructor({
        message = '',
        payload = {}
    })
    {
        this.message = message;
        this.payload = payload;
    }
}

module.exports = Response;