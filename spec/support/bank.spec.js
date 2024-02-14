// tests here

import Account from '../../src/Account.js';

describe('account class tests', () => {
    it('should increase the balance by the amount specified in a deposit transaction', () => {
        // Arrange
        const testAccount = new Account(1234, "Ahmed");
        const testTransaction = jasmine.createSpyObj('testTransaction', ['getAmount']);
        testTransaction.getAmount.and.returnValue(100);
        const expectedValue = 100;
        // Act
        testAccount.deposit(testTransaction);
        // Assert
        expect(testAccount.getBalance()).toBe(expectedValue);
    })

    it('should decrease the balance by the amount specified in a debit transaction', () => {
        // Arrange
        const testAccount = new Account(1234, "Ahmed", 1000);
        const testTransaction = jasmine.createSpyObj('testTransaction', ['getAmount']);
        testTransaction.getAmount.and.returnValue(100);
        const expectedValue = 900;
        // Act
        testAccount.withdraw(testTransaction);
        // Assert
        expect(testAccount.getBalance()).toBe(expectedValue);
    })

    it('should push transaction into transactions array when deposit occurs', () => {
        // Arrange
        const testAccount = new Account(1234, "Ahmed");
        const testTransaction = jasmine.createSpyObj('testTransaction', ['getAmount']);
        testTransaction.getAmount.and.returnValue(100);
        const expectedValue = 1;
        // Act
        testAccount.deposit(testTransaction);
        // Assert
        expect(testAccount.getTransactions().length).toBe(expectedValue);
    })

    it('should push transaction into transactions array when withdrawal occurs', () => {
        // Arrange
        const testAccount = new Account(1234, "Ahmed", 1000);
        const testTransaction = jasmine.createSpyObj('testTransaction', ['getAmount']);
        testTransaction.getAmount.and.returnValue(100);
        const expectedValue = 1;
        // Act
        testAccount.withdraw(testTransaction);
        // Assert
        expect(testAccount.getTransactions().length).toBe(expectedValue);
    })

    it('should not be able to withdraw more than the balance available', () => {
        // Arrange
        const testAccount = new Account(1234, "Ahmed", 1000);
        const testTransaction = jasmine.createSpyObj('testTransaction', ['getAmount']);
        testTransaction.getAmount.and.returnValue(1100);
        const expectedValue = 1000;
        // Act
        testAccount.withdraw(testTransaction);
        // Assert
        expect(testAccount.getBalance()).toBe(expectedValue);
    })
})