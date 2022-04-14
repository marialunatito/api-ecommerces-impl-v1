class Message{
    constructor({
        title = '',
        code = '',
        description = '',
        technicalDetail = ''
    }){
        this.title = title;
        this.code = code;
        this.description = description;
        this.technicalDetail = technicalDetail
    }
}

module.exports = Message;