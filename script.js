class BankAccount {
  // constructor 
  constructor(balance, ownerName) {
    console.log("\tBankAccount Constructor")
    this.acctNum = this.generateAcctNum();
    this.balance = balance;
    this.ownerName = ownerName;
  }

  generateAcctNum() {
    console.log("\tBankAccount  GenerateAcctNum")
    return Math.floor(Math.random() * 10000000000);
  }

  // static properties

  // methods
  deposit(amount) {
    console.log("\tBankAccount Deposit")
    this.balance += amount;
  }

  withdraw(amount) {
    console.log("\tBankAccount Withdraw")
    this.balance -= amount;
  }
}

class CheckingAccount extends BankAccount {
  // constructor
  contructor(balance, ownerName, overdraftEnabled) {
    console.log("\tCheckingAccount Constructor");
    // super(balance, ownerName);
    this.overdraftEnabled = overdraftEnabled;
  }
  // static properties
  // methods
  withdraw(amount) {
    // this overwrites BankAccount.withdraw();
    // implement overdraft feature
    // blah blah 
    console.log("\tCheckingAccount Withdraw")
    this.balance -= amount;
    this.overdraft = false;
  }
}

class SavingsAccount extends BankAccount {
  // constructor
  constructor(balance, ownerName, maxAllowedWithdrawals = 0) {
    console.log("\tSavingsAccount Constructor")
    super(balance, ownerName);
    this.maxAllowedWithdrawals = maxAllowedWithdrawals;
  }
  // static properties
  // methods
  withdraw(amount) {
    // this overwrites BankAccount.withdraw();
    // disallow withdrawals
    // blah blah blah
    console.log("\tSavingAccountWithdrawal")
    if (this.maxAllowedWithdrawals) {
      this.balance -= amount;
    }
  }
}
