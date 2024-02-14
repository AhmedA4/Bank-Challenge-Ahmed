// Create account class

export default class Account {
    #accountNumber;
    #name;
    #balance;
    #transactions = [];

    constructor(accountNumber, name, balance = 0) {
        this.#accountNumber = accountNumber;
        this.#name = name;
        this.#balance = balance;
    }

    printAccountDetails() {
        return `Account number: ${this.#accountNumber}\nName: ${this.#name}\nBalance: ${this.#balance}`;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getName() {
        return this.#name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance) {
        this.#balance = balance;
    }

    deposit(transaction) {
        // this.#balance += transaction.getAmount();
        this.setBalance(this.#balance + transaction.getAmount());
        this.#transactions.push(transaction);
    }

    withdraw(transaction) {
        if (this.#balance - transaction.getAmount() < 0) {
            return;
        };
        // this.#balance -= transaction.getAmount();
        this.setBalance(this.#balance - transaction.getAmount());
        // transaction.setBalance(this.#balance);
        this.#transactions.push(transaction);
    }

    getTransactions() {
        return this.#transactions;
    }

    printStatement() {
        let statement = "date       || credit  || debit  || balance\n";
        let balance = this.#balance;
        this.#transactions.reverse();
        this.#transactions.forEach(transaction => {
            if (transaction.getType() === "deposit") {
                balance += transaction.getAmount();
                statement += `${transaction.getDate()} || ${transaction.getAmount()}.00 ||        || ${balance}.00\n`;
            } else {
                balance -= transaction.getAmount();
                statement += `${transaction.getDate()} ||         || ${transaction.getAmount()}.00 || ${balance}.00\n`;
            }
        });
        console.log(statement);
}
}