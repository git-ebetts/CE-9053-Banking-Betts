  module.exports = BankAccount;
  
  function BankAccount(config) {
  this.accountId=config.accountId;
  this.balance = config.balance;
  this.locked = false;
  this.deposit = config.deposit;
  this.withdraw = config.withdraw;
  }

  BankAccount.prototype = {

    accountId: function() {
      if (_.isString(this.BankAccount.accountId === true))
      {return this.accountId;}
      else throw("AccountId must be a string");
    },

    balance: function() {
      console.log(this.balance);
      if(_.isNaN(this.balance)){
      throw("balance must be a number");
      } else if (this.balance < 0) {
      throw("balance must be greater or equal to 0");
      } else if (this.balance >= 0) {
      return (this.balance);}
      else return (this.balance===0);
    },

    locked : function() {
      if (_.isBoolean(this.BankAccount.locked === false))
      throw("Locked must be true or false");
      if (this.balance < 0) {
      return this.locked === true;
      } else {return this.locked === false;}
    },

    deposit: function(amount) {
      if(isNaN(this.deposit(amount))){
      throw("amount must be a number");
      } else if (this.deposit(amount) <= 0) {
      throw("deposit must be greater or equal to 0");
      } else if (this.locked === true) {
      throw("account is locked");
      } else {
      this.balance() === (this.balance() + this.deposit(amount));}
    },

    withdraw: function(amount) { 
      if(isNaN(withdraw(amount))){
      throw("amount must be a number");
      } else if (this.withdraw(amount) <= 0) {
      throw("amount must be greater or equal to 0");
      } else if (this.balance - this.withdraw(amount) <= 1) {
      throw("insufficient balance");
      } else if (this.locked === true) {
      throw("account is locked");
      } else if (this.balance < 1000) {
      this.withdraw(amount) === this.withdraw(amount) + 1;
      } else {
      this.balance = (this.balance - withdraw(amount));}
    }
  };


