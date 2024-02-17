"use strict";

// Accounts
const account1 = {
  owner: "Kate Bishop",
  job: "CEO",
  movements: [2000, 5253, -1790, -500, 50, -158, 240, 587],
  pin: 1111,
  loans: [500, 150],
};

const account2 = {
  owner: "Livia Bator",
  job: "Marketing Head",
  movements: [-200, 657, 790, -654, 54, -5500, 358, 581],
  pin: 2222,
  loans: [4000],
};

const account3 = {
  owner: "Randy Press",
  job: "Data Analyst",
  movements: [2345, 637, -24, 6541, -564, -3577, -65, -254],
  pin: 3333,
  loans: [0],
};

const account4 = {
  owner: "Ryan Workman",
  job: "Senior Engineer",
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
const labelTransactionRow = document.querySelector(".transaction-row");
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
const calcDisplayMovements = function (acc) {
  containerTransactions.innerHTML = "";

  console.log(acc);

  acc.forEach((mov, i) => {
    const movType = mov > 0 ? "deposit" : "withdrawl";

    const html = `<div class="transaction-row">
  <div class="transaction-description">
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="transaction-icon"
    >
      <path
        d="M31 15.8756C31 24.0208 24.2978 30.6481 16 30.6481C7.70218 30.6481 1 24.0208 1 15.8756C1 7.73037 7.70218 1.10303 16 1.10303C24.2978 1.10303 31 7.73037 31 15.8756Z"
        stroke="#718EBF"
        stroke-width="2"
      />
      <path
        d="M16.5303 10.6135C16.2374 10.3206 15.7626 10.3206 15.4697 10.6135L10.6967 15.3864C10.4038 15.6793 10.4038 16.1542 10.6967 16.4471C10.9896 16.74 11.4645 16.74 11.7574 16.4471L16 12.2045L20.2426 16.4471C20.5355 16.74 21.0104 16.74 21.3033 16.4471C21.5962 16.1542 21.5962 15.6793 21.3033 15.3864L16.5303 10.6135ZM16.75 22.1846L16.75 11.1438L15.25 11.1438L15.25 22.1846L16.75 22.1846Z"
        fill="#718EBF"
      />
    </svg>
    <p class="transaction-name">Transaction</p>
  </div>
  <p class="transaction-id">${12345678}</p>
  <p class="transaction-type">Transfer</p>
  <p class="transaction-card">1234****</p>
  <p class="transaction-date">28 Jan, 12.30 AM</p>
  <p class="transaction-amount transaction-amount--${movType}">
    $${mov}
  </p>
  <button class="btn-transaction btn-transaction--receipt">
    Download
  </button>
</div>`;

    containerTransactions.insertAdjacentHTML("afterbegin", html);
  });
};
// calcDisplayMovements(account1.movements);
calcDisplayMovements(account1.movements);

// Display Profile - Loan
const calcDisplayProfileLoan = function (acc) {
  const profileName = acc.owner;
  const jobTitle = acc.job;

  labelProfileName.textContent = profileName;
  labelProfileProfession.textContent = jobTitle;
};
calcDisplayProfileLoan(account1);

// Display Card
const calcDisplayCard = function (acc) {
  const cardBalance = acc.movements.reduce((acc, cur) => acc + cur);
  const cardName = acc.owner;

  labelCardBalance.textContent = `$${cardBalance}`;
  labelCardName.textContent = cardName;
};

calcDisplayCard(account1);
