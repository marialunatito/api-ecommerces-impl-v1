module.exports.invoke = async (data) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(data);
        }, 3000);
    });
}
