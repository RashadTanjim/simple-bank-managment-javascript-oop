class Transaction {
    constructor(bank, accountNumber, attemptedPin) {
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.isAuthorized = bank.authenticateUser(accountNumber, attemptedPin);
    }

    // Get balance of account
    getBalance() {
        if (this.isAuthorized) {
            return this.bank.getBalance(this.accountNumber);
        } else {
            throw new Error("Unauthorized access");
        }
    }

    // Credit account
    credit(amount) {
        if (this.isAuthorized) {
            this.bank.credit(this.accountNumber, amount);
        } else {
            throw new Error("Unauthorized access");
        }
    }

    // Debit account
    debit(amount) {
        if (this.isAuthorized) {
            return this.bank.debit(this.accountNumber, amount);
        } else {
            throw new Error("Unauthorized access");
        }
    }
}
