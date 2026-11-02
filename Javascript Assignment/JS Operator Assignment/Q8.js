const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce(
    (sum, product) => sum + product.price, 0
);

let discountedTotal = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    let finalPrice = product.price * (1 - discount);
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original = ₹${product.price}, ` +
        `Final = ₹${finalPrice.toFixed(2)}`
    );
}

if (discountedTotal > 50000) {
    discountedTotal = discountedTotal * 0.95;
    console.log("Extra 5% discount applied.");
}

console.log("Original Cart Total: ₹" + originalTotal.toFixed(2));
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
