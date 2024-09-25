class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Company {
    constructor(companyName, taxId) {
        this.companyName = companyName;
        this.taxId = taxId;
    }

    getCompanyName() {
        return this.companyName;
    }
}
