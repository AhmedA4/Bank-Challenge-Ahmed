1. As a bank account holder, I would like to be able to access my account, so that I could view it and manage my money

| Object | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Account | account number @num | getAccountNumber() | @num |
|  | name @String | getName() | @String |
|  | balance @num | getBalance() | @num |
|  | transactions @Array[@transactions] |  |  |

---

2. As a bank account holder, I would like to be able to deposit money into my account, so that I could save and keep my money safe
   
| Object | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Account | balance @num | deposit() | @Void |
|  |  | getBalance() | @num |
| Transaction | date @String |  |  |
|  | amount @num |  |  |
|  | type @String |  |  |

#Tests:
- Test that account.deposit() increases the balance by the amount given as the argument (DONE)

---

3. As a bank account holder, I would like to be able to withdraw funds, so that I could spend my money in the form of cash when I want to.

| Object | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Account | balance @num | withdraw() | @Void |
|  |  | getBalance() | @num |
| Transaction | date @String |  |  |
|  | amount @num |  |  |
|  | type @String |  |  |

#Tests:
- Test that withdraw funds reduced the balance by the amount given (DONE)
- Test that user can't withdraw more than the balance available (DONE)

---

4. As a bank account holder, I would like to be able to print my statements, so that I could manage and keep track of my finances.

| Object | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Account | statement @String | printStatement() | @String |

#Tests:
- Test that when a deposit occurs, the transaction is pushed into the transactions array (DONE)
- Test that when a withdrawal occurs, the transaction is pushed into the transactions array (DONE)
