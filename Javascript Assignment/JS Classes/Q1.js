class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent > 0 && percent <= 100) {
            const discountAmount = (this.price * percent) / 100;
            this.price -= discountAmount;
            console.log(`Applied ${percent}% discount to ${this.name}. New Price: $${this.price.toFixed(2)}`);
        } else {
            console.log('Invalid discount percentage.');
        }
    }

    getDetails() {
        return `[ID: ${this.id}] ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(101, 'Laptop', 1200, 'Electronics'),
    new Product(102, 'Wireless Mouse', 25, 'Electronics'),
    new Product(103, '4K Monitor', 450, 'Electronics'),
    new Product(104, 'Ergonomic Chair', 1100, 'Furniture'),
    new Product(105, 'Mechanical Keyboard', 150, 'Electronics'),
    new Product(106, 'Smartphone', 1050, 'Electronics')
];

console.log("=== All Initial Products ===");
products.forEach(p => console.log(p.getDetails()));

console.log("\n=== Applying 10% Discount ===");
products.forEach(p => p.applyDiscount(10));

console.log("\n=== Products with Price > $1000 ===");
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.getDetails()));
