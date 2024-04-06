#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgGreen("\n\tWelcome to CLI Currency Converter App\n"));

// 1) Choose a base currency and convert its values to other currencies e.g. USD

const currency: any = {
  USD: 1, // Base Currency
  EUR: 0.92,
  GBP: 0.79,
  JPY: 151,
  INR: 83.31,
  RUB: 92.45,
  AED: 3.67,
  KRW: 1351,
  PKR: 278,
  ITL: 1786,
};

// 2) Add messages and options to the converter

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "INR",
      "RUB",
      "AED",
      "KRW",
      "PKR",
      "ITL",
    ],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "INR",
      "RUB",
      "AED",
      "KRW",
      "PKR",
      "ITL",
    ],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

// 3) Create dynamic data for mass calculations

let fromAmount: any = currency[userAnswer.from];
let toAmount: any = currency[userAnswer.to];
let amount: any = userAnswer.amount;
let baseAmount: any = amount / fromAmount;
let convertedAmount: any = baseAmount * toAmount;

console.log(chalk.bold.bgCyanBright(Math.floor(convertedAmount)));
