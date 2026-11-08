const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 799, stock: 40 },
    { id: 3, name: "Phone", category: "Electronics", price: 20000, stock: 2 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1999, stock: 8 },
    { id: 5, name: "Novel", category: "Books", price: 350, stock: 3 }
];

const getLowStockProducts = (list, limit = 5) => { return list.filter((p) => { return p.stock <= limit; }); };
const sortProductsByPrice = (list) => { return [...list].sort((a, b) => { return a.price - b.price; }); };
const calculateTotalInventoryValue = (list) => { return list.reduce((t, p) => { return t + p.price * p.stock; }, 0); };
const groupByCategory = (list) => {
    return list.reduce((acc, p) => {
        (acc[p.category] = acc[p.category] || []).push(p);
        return acc;
    }, {});
};

console.log("Low stock:", getLowStockProducts(products).map((p) => { return p.name; }));
console.log("Sorted by price:", sortProductsByPrice(products).map((p) => { return `${p.name}(${p.price})`; }));
console.log("Total inventory value:", calculateTotalInventoryValue(products));
console.log("Grouped:", JSON.stringify(groupByCategory(products), null, 2));
