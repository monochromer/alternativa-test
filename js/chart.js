;(function(global) {
    var ROOT_SELECTOR = '.point-chart';
    var SECTOR_SELECTOR = '.point-chart__sector';

    function Chart(rootElement, options) {
        this.options = options;
        this.rootElement = rootElement;
        this.sector = rootElement.querySelector(SECTOR_SELECTOR);

        this.value = (options && options.defaultValue) || 100;
    }

    Object.defineProperty(Chart.prototype, 'radius', {
        get: function() {
            return parseFloat(this.sector.getAttribute('r'));
        }
    });

    Object.defineProperty(Chart.prototype, 'pathLength', {
        get: function() {
            return Math.PI * 2 * this.radius;
        }
    });

    Object.defineProperty(Chart.prototype, 'value', {
        get: function() {
            return this.__value;
        },

        set: function(value) {
            this.__value = value;
            var c = this.pathLength;
            var v = 0.01 * value * c;
            this.sector.setAttribute('stroke-dasharray', v + ' ' + c);
        }
    })

    Chart.ROOT_SELECTOR = ROOT_SELECTOR;
    Chart.SECTOR_SELECTOR = SECTOR_SELECTOR;

    global.Chart = Chart;
})(window);