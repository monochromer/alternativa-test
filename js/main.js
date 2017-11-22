;(function(global) {
    var isNumeric = window.utils.isNumeric;

    // инициализация работы диаграмм
    var Chart = window.Chart;

    // сохранение всех экземпляров класса Chart и данных
    var ChartStore = {};
    var dataStore = {};

    var chartElems = [].slice.call(document.querySelectorAll(Chart.ROOT_SELECTOR));

    chartElems.forEach(function(domElem) {
        var id = domElem.id.toUpperCase();
        ChartStore[id] = new Chart(domElem);
        dataStore[id] = 100;
    });

    var form = document.querySelector('.control-form');

    function setValues() {
        Object.keys(dataStore).forEach(function(id) {
            ChartStore[id].value = dataStore[id];
        })
    }

    function storeChanges(e) {
        var name = e.target.name.toUpperCase();
        var value = parseFloat(e.target.value);
        if (!isNumeric(value)) {
            return console.error('Значение поля ввода ' +  name + ' должно быть числом');
        }
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        dataStore[name] = value;
    }

    form.onchange = storeChanges;
    form.oninput = storeChanges;
    form.onsubmit = function(e) {
        setValues();
        e.preventDefault();
    };
})(window);