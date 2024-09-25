class Bank {

    constructor() {
        this.accounts = new Map(); // Account Number -> Account Object
    }

    // Add commercial account
    openCommercialAccount(company, pin, startingDeposit) {
        const accountNumber = this.generateAccountNumber();
        const newAccount = new CommercialAccount(company, accountNumber, pin, startingDeposit);
        this.accounts.set(accountNumber, newAccount);
        return accountNumber;
    }

    // Add consumer account
    openConsumerAccount(person, pin, startingDeposit) {
        const accountNumber = this.generateAccountNumber();
        const newAccount = new ConsumerAccount(person, accountNumber, pin, startingDeposit);
        this.accounts.set(accountNumber, newAccount);
        return accountNumber;
    }

    // Authenticate user
    authenticateUser(accountNumber, pin) {
        const account = this.accounts.get(accountNumber);
        return account ? account.validatePin(pin) : false;
    }

    // Get account balance
    getBalance(accountNumber) {
        const account = this.accounts.get(accountNumber);
        return account ? account.getBalance() : null;
    }

    // Credit account
    credit(accountNumber, amount) {
        const account = this.accounts.get(accountNumber);
        if (account) {
            account.credit(amount);
        }
    }

    // Debit account
    debit(accountNumber, amount) {
        const account = this.accounts.get(accountNumber);
        return account ? account.debit(amount) : false;
    }

    // Generate unique account number (for simplicity)
    generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000);
    }
}
