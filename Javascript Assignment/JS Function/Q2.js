
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}
let numbers = [1, 2, 3, 4];
let doubledNumbers = applyOperation(numbers, num => num * 2);
console.log("Doubled:", doubledNumbers);
let squaredNumbers = applyOperation(numbers, num => num * num);
console.log("Squared:", squaredNumbers);