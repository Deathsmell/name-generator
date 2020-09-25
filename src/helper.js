let Helper = {}
const random = require('./random.js');

Helper.replaceSymbolWithNumber = function (string, symbol) {
    string = string || "";
    // default symbol is '#'
    if (symbol === undefined) {
        symbol = '#';
    }

    let str = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === symbol) {
            str += random.number(9);
        } else if (string.charAt(i) === "!") {
            str += random.number({min: 2, max: 9});
        } else {
            str += string.charAt(i);
        }
    }
    return str;
};

module.exports = Helper