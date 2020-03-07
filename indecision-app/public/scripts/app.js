'use strict';

var user = {
    name: 'Adit',
    cities: ['Harapan kita', 'Karawaci', 'Tangerang'],
    printTempatTInggal: function printTempatTInggal() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' tinggal di ' + city;
        });
    }
};

console.log(user.printTempatTInggal());

var multipler = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multipler.multiply());
