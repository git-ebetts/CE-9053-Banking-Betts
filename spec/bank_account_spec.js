var BankAccount = require("../app/bank_account.js");


describe("BankAccount", function(){
    it("exists", function(){
        expect(BankAccount).toBeDefined();
    });
});

describe("BankAccount", function() {
  var accountId, balance, locked;
  var deposit, withdraw;
   });

describe ("accountId()", function() {
it("should throw an exception if account id is not provided", function () {
expect(function() {
	bankAcct1.accountId()}).toThrow();
});
});

describe ("balance()", function() {

it("should throw an exception if balance is not a number", function () {
expect(function(){
	bankAcct1.balance('bar')}).toThrow();
});

it("should throw an exception if balance is less than 0", function () {
	expect(function(){
	bankAcct1.balance('-1')}).toThrow();
});

it("should default to 0", function () {
	expect(function(){
	bankAcct1.balance()}).toBeDefined(0);
});
});

describe ("locked()", function() {

it("should return true or false", function () {
expect(function(){
	bankAcct1.balance('foo')}).toThrow;
});

it("should return true if balance is negative", function () {
expect(function(){
	bankAcct1.balance('-1')}).toBeDefined(true);
});

it("should default to false", function () {
expect(function(){
	bankAcct1.locked()}).toBeDefined(false);
});
});

describe ("deposit()", function() {

it("should throw an exception if deposit is not a number", function () {
expect(function(){
	bankAcct1.deposit('z')}).toThrow();
});

it("should throw an exception if deposit amount is 0 or less", function () {
expect(function(){
	bankAcct1.deposit(0)}).toThrow();
});

it("should throw an exception if account is locked", function () {
expect(function(){
	bankAcct1.locked(true)}).toThrow();
});
});

describe ("withdraw()", function() {
	// var withdrawbalanceBefore
	// var withdrawbalanceAfter

it("should throw an exception if withdraw amount is not a number", function () {
expect(function(){
	bankAcct1.withdraw('z')}).toThrow();
});

it("should throw an exception if withdraw is 0 or less", function () {
expect(function(){
	bankAcct1.withdraw(0)}).toThrow();
});

it("should throw an exception if withdraw results in negative balance", function () {
expect(function(){
	bankAcct1.withdraw(10) = bankAcct1.balance(0)}).toThrow();
});

it("should throw an exception if account is locked", function () {
expect(function(){
	bankAcct1.locked(true)}).toThrow();
});
});


// it("should deduct 1 if balance is less than 1000", function () {
// 	expect(function(){
// 	bankAcct1.withdrawbalanceBefore()-1}).toEqual(bankAcct1.withdrawbalanceAfter();
// });
