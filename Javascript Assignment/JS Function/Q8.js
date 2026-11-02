Array.prototype.myMap = function (callback) {
    let result = [];

    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }

    return result;
};

console.log([1, 2, 3].myMap(num => num * 2));
console.log([1, 2, 3].myMap(num => num * num));