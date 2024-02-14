// Transactions class

export default class Transaction {
    #date;
    #amount;
    #type;

    constructor(date, amount, type) {
        this.#date = date;
        this.#amount = amount;
        this.#type = type;
    }

    getDate() {
        return this.#date;
    }

    getAmount() {
        return this.#amount;
    }

    getType() {
        return this.#type;
    }
}