// Create bank
const myBank = new Bank();

// Create a company and open a commercial account
const company = new Company("TechCorp", 123456789);
const commercialAccountNumber = myBank.openCommercialAccount(company, 1234, 5000);

// Create a person and open a consumer account
const person = new Person("John", "Doe");
const consumerAccountNumber = myBank.openConsumerAccount(person, 5678, 1500);

// Perform transactions
const transaction1 = new Transaction(myBank, consumerAccountNumber, 5678);
console.log(transaction1.getBalance()); // 1500
transaction1.credit(500);
console.log(transaction1.getBalance()); // 2000
transaction1.debit(300);
console.log(transaction1.getBalance()); // 1700

// Perform commercial account transaction
const transaction2 = new Transaction(myBank, commercialAccountNumber, 1234);
transaction2.credit(1000);
console.log(transaction2.getBalance()); // 6000
