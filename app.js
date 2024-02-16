"use strict";

// Accounts
const account1 = {
  owner: "Kate Bishop",
  movements: [2000, 5253, -1790, -500, 50, -158, 240, 587],
  pin: 1111,
  loans: [500, 150],
};

const account2 = {
  owner: "Livia Bator",
  movements: [-200, 657, 790, -654, 54, -5500, 358, 581],
  pin: 2222,
  loans: [4000],
};

const account3 = {
  owner: "Randy Press",
  movements: [2345, 637, -24, 6541, -564, -3577, -65, -254],
  pin: 3333,
  loans: [0],
};

const account4 = {
  owner: "Ryan Workman",
  movements: [-545, -867, 36657, 54, 574, -1357, 851, -78],
  pin: 4444,
  loans: [10000],
};

const accounts = [account1, account2, account3, account4];

// Variables
const labelBalanceSummary = document.querySelector(".summary-value--balance");
const labelIncomeSummary = document.querySelector(".summary-value--income");
const labelExpenseSummary = document.querySelector(".summary-value--expense");
const labelLoansSummary = document.querySelector(".summary-value--loans");
const labelTransactionFor = document.querySelector(".transaction-name");
const labelTransactionAmount = document.querySelector(".transaction-amount");
const labelProfileName = document.querySelector(".profile-name");
const labelProfileProfession = document.querySelector(".profile-profession");
const labelCardBalance = document.querySelector(".card-balance-value");
const labelCardName = document.querySelector(".card-holder-name");

const containerApp = document.querySelector(".container");
const containerTransactions = document.querySelector(".transactions");

const inputTransferTo = document.querySelector("#transfer-to");
const inputTransferFor = document.querySelector("#transfer-for");
const inputTransferAmount = document.querySelector("#input-amount");
const inputLoanRequest = document.querySelector("#loan-amount");

const btnNavSettings = document.querySelector(".btn-nav--settings");
const btnTransferAmount = document.querySelector(".btn-send--transfer");
const btnLoanRequest = document.querySelector(".btn-loan");

// Functions

// Display Summary
const calcDisplaySummary = function (acc) {
  const balance = acc.reduce((acc, curr) => acc + curr);

  labelBalanceSummary.textContent = `$${balance}`;

  const income = acc.filter((mov) => mov > 0).reduce((acc, curr) => acc + curr);

  labelIncomeSummary.textContent = `$${income}`;

  const expense = acc
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr);

  labelExpenseSummary.textContent = `$${Math.abs(expense)}`;
};

calcDisplaySummary(account1.movements);

// Display Loans
const calcDisplayLoans = function (acc) {
  const loans = acc.reduce((acc, curr) => acc + curr);

  labelLoansSummary.textContent = `$${loans}`;
};

calcDisplayLoans(account1.loans);

// Display Movements
