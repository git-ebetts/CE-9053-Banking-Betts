 module.exports = BankAccount;

  function BankAccount(config) {
    this.validate(config || {});
  this.accountId=config.accountId;
  this.balance = config.balance || 0;
  this.locked = config.locked || false;
  }

  BankAccount.prototype.validate = function(config) {
      if (!config.accountId)
  throw "AccountId Required";
    if (config.balance !== undefined){
    if (typeof config.balance != "number")
    throw "Balance must be a number"
      if (config.balance < 0)
      throw "balance must be greater or equal to 0"
    }
if (config.locked !== undefined && (typeof config.locked !== "boolean"))
throw "Locked must be true or false"
};


    BankAccount.prototype.deposit = function(amount) {
      if (isNaN(amount))
        throw("Amount must be a number");
      if (amount <= 0)
        throw ("Amount must be positive");
      if (this.locked === true) {
        throw("Account is locked");
      }
      this.balance += amount;
    };

    BankAccount.prototype.withdraw = function(amount) {
      if (isNaN(amount))
        throw "Amount must be a number";
      if (amount <= 0)
        throw "Amount must be positive";
      if (this.locked === true) {
        throw "Account is locked";
      }

      if (this.balance < 1000)
        amount += 1;
      if (this.balance - amount <= 0)
        throw "Insufficient funds"
      this.balance -= amount;
        };

