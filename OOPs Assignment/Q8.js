class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs.${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const t1 = new OnlineTicket("Interstellar", "A12", 300, 30);
const t2 = new OnlineTicket("Inception", "B07", 250, 25);

[t1, t2].forEach((t) => {
    t.printTicket(); // found via prototype chain: OnlineTicket -> MovieTicket.prototype
    console.log("Total:", t.getTotalAmount());
});
console.log("Own property?", t1.hasOwnProperty("printTicket"));
console.log("Prototype chain works?", t1 instanceof MovieTicket);
