let random ={}
module.exports = random

random.arrayElement = function arrayElement (array) {
    array = array || ["a", "b", "c"];
    const r = random.number({ max: array.length - 1 });
    return array[r];
}

random.number = function randomNumber(options) {

    if (typeof options === "number") {
        options = {
            max: options,
        };
    }

    options = options || {};

    if (typeof options.min === "undefined") {
        options.min = 0;
    }

    if (typeof options.max === "undefined") {
        options.max = 99999;
    }
    if (typeof options.precision === "undefined") {
        options.precision = 1;
    }

    // Make the range inclusive of the max value
    let max = options.max;
    if (max >= 0) {
        max += options.precision;
    }

    return Math.floor(Math.random() * max)
}