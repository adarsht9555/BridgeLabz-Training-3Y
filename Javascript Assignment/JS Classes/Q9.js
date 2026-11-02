class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
        console.log(`Added: ${name} (x${quantity}) @ $${price} each`);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    applyCoupon(couponCode) {
        const rawTotal = this.getTotal();
        console.log(`\nSubtotal: $${rawTotal.toFixed(2)}`);

        const couponRegex = /^(SAVE|DISC)(\d{2})$/;
        const match = couponCode.match(couponRegex);

        if (match) {
            const discountPercent = parseInt(match[2], 10);
            const discountAmount = (rawTotal * discountPercent) / 100;
            const finalTotal = rawTotal - discountAmount;

            console.log(`Coupon '${couponCode}' applied successfully! (${discountPercent}% OFF)`);
            console.log(`Discount Amount: -$${discountAmount.toFixed(2)}`);
            console.log(`Final Total: $${finalTotal.toFixed(2)}`);
            return finalTotal;
        } else {
            console.log(`Invalid Coupon Code: '${couponCode}'. No discount applied.`);
            console.log(`Final Total: $${rawTotal.toFixed(2)}`);
            return rawTotal;
        }
    }
}

const myCart = new Cart();
myCart.addItem("Wireless Headphones", 80, 2);
myCart.addItem("USB-C Cable", 15, 3);
myCart.addItem("Laptop Stand", 45, 1);

console.log("\n--- Test Case 1: Valid Coupon SAVE20 ---");
myCart.applyCoupon("SAVE20");

console.log("\n--- Test Case 2: Invalid Coupon INVALID50 ---");
myCart.applyCoupon("INVALID50");
