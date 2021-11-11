export class ATM {
    constructor(balance) {
        this.balance = balance;
        this.payment = 500;
        this.bills = 150;
    }

    withdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }

    getBalance() {
        return this.balance;
    }

    putIn(amount) {
        this.balance += amount;
        return this.balance;
    }

    receivePayment() {
        this.balance += this.payment;
        return this.balance;
    }

    payBills() {
        this.balance -= this.bills;
        return this.balance;
    }
}
