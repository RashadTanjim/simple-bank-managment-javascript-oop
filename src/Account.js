class Account {
    constructor(accountHolder, accountNumber, pin, startingDeposit) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = startingDeposit;
    }

    // Validate pin
    validatePin(attemptedPin) {
        return this.pin === attemptedPin;
    }

    // Get balance
    getBalance() {
        return this.balance;
    }

    // Credit amount
    credit(amount) {
        this.balance += amount;
    }

    // Debit amount, return true if successful
    debit(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
