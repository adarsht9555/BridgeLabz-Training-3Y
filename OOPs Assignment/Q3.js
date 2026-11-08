function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    return this.price - (this.price * percent) / 100;
};

const products = [new Product("Laptop", 50000), new Product("Phone", 20000), new Product("Headphones", 2000)];
const discounts = [10, 15, 50];

products.forEach((p, i) => {
    console.log(`${p.name}: Rs.${p.price} -> Rs.${p.applyDiscount(discounts[i])} (${discounts[i]}% off)`);
});

// Abstraction: caller only uses applyDiscount(); the calculation logic stays hidden inside.
