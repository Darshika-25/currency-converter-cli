import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgGreen("\n\tWelcome to CLI Currency Converter App\n"));
// 1) Choose a base currency and convert its values to other currencies e.g. USD
const currency = {
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
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'RUB', 'AED', 'KRW', 'PKR', 'ITL'],
    }, {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'RUB', 'AED', 'KRW', 'PKR', 'ITL'],
    }, {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number',
    },
]);
// 3) Create dynamic data for mass calculations
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.bgCyanBright(Math.floor(convertedAmount)));
