class CommercialAccount extends Account {

    constructor(company, accountNumber, pin, startingDeposit) {
        super(company, accountNumber, pin, startingDeposit);
        this.authorizedUsers = []; // List of authorized Person objects
    }

    // Add authorized user
    addAuthorizedUser(person) {
        this.authorizedUsers.push(person);
    }

    // Check if the person is authorized
    isAuthorizedUser(person) {
        return this.authorizedUsers.includes(person);
    }
}
