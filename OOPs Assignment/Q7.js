class BankAccount {
    #balance = 0;

    constructor(initial = 0) {
        this.#balance = initial;
    }
    deposit(amount) {
        if (amount <= 0) { throw new Error("Deposit amount must be positive."); }
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) { throw new Error("Withdrawal amount must be positive."); }
        if (amount > this.#balance) { throw new Error("Insufficient balance."); }
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log("After deposit:", acc.getBalance());
acc.withdraw(300);
console.log("After withdraw:", acc.getBalance());

[5000, -100].forEach((amt) => {
    try {
        acc.withdraw(amt);
    } catch (e) {
        console.log(`Withdraw ${amt} failed: ${e.message}`);
    }
});
console.log("Direct access acc.balance:", acc.balance); // undefined -> private
