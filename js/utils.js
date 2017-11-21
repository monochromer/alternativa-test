;(function(global) {
    var utils = {};

    utils.isNumeric = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    global.utils = utils;
})(window);