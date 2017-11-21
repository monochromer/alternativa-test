;(function(global) {
    var ROOT_SELECTOR = '.point-chart';
    var SECTOR_SELECTOR = '.point-chart__sector';

    function Chart(rootElement, options) {
        this.options = options;
        this.rootElement = rootElement;
        this.sector = rootElement.querySelector(SECTOR_SELECTOR);

        this.setValue(options && options.defaultValue || 100);
    }

    Chart.prototype.setValue = function(value) {
        this.sector.setAttribute('stroke-dasharray', value + ' 100');
    };

    Chart.ROOT_SELECTOR = ROOT_SELECTOR;
    Chart.SECTOR_SELECTOR = SECTOR_SELECTOR;

    global.Chart = Chart;
})(window);