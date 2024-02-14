// Run the program here

import Account from "./src/Account.js";
import Transaction from "./src/Transaction.js";

const account = new Account(1234, "Ahmed");

// console.log(account.printAccountDetails());

const transaction = new Transaction("10/01/2012", 1000, "deposit");
const transaction2 = new Transaction("13/01/2012", 2000, "deposit");
const transaction3 = new Transaction("14/01/2012", 500, "withdrawal");

account.deposit(transaction);
account.deposit(transaction2);
account.withdraw(transaction3);

account.printStatement();
