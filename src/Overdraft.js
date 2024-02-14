// Overdraft is a child class of Account

export default class Overdraft extends Account {
    constructor(accountNumber, name, balance = 0) {
        super(accountNumber, name, balance);
    }

}