
function BankAccount(accountNumber, initialBalance = 0) {
    let balance = initialBalance;
  
    function deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited ${amount}. New balance: ${balance}`);
      }
    }
  
    function withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${balance}`);
      } 
    }
  
    return {
      accountNumber,
      get balance() {
        return balance;
      },
      deposit,
      withdraw
    };
  }
  function SavingsAccount(accountNumber, interestRate, initialBalance = 0) {
    const bankAccount = BankAccount(accountNumber, initialBalance);
    const withdrawalLimit = 1000;
  
    function withdraw(amount) {
      if (amount > 0 && amount <= bankAccount.balance && amount <= withdrawalLimit) {
        bankAccount.withdraw(amount);
      } 
    }
  
    return {
      ...bankAccount,
      interestRate,
      withdraw
    };
  }
let mySavings = new SavingsAccount('12345', 0.02);

mySavings.deposit(1000);

mySavings.withdraw(600); 

mySavings.withdraw(200);
  
