const menu = [
    { item: "Pizza", price: 250 },
    { item: "Burger", price: 120 },
    { item: "Pasta", price: 180 },
    { item: "Coke", price: 60 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map((name) => {
        const found = menu.find((m) => { return m.item.toLowerCase() === name.toLowerCase(); });
        if (!found) { throw new Error(`Invalid item ordered: "${name}"`); }
        return found.price;
    });
    return prices.reduce((total, p) => { return total + p; }, 0);
}

const orders = [["Pizza", "Coke"], ["Burger", "Pasta", "Coke"], ["Pizza", "Sushi"]];
orders.forEach((order) => {
    try {
        console.log(`Order [${order}] -> Total: Rs.${calculateBill(order)}`);
    } catch (e) {
        console.log("Error:", e.message);
    }
});
