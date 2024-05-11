#!/usr/ bin / env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold.italic("\n Wellcome to code with 'Sakina_khan' Currency Convertor \n"));

//define the list of currencies and thier exchange rates
let exchange_rate: any ={
    "USD": 1, //Base currency
    "EUR": 0.9, //European currency
    "JYP": 113, // Japenese currency
    "CAD": 1.3, //Canadian Dollar
    "AUD":1.65, //Australian dollar
    "PKR": 200, //Pakistani rupees
    //Add more currencies and their exchange rate here
}
//prompt the user to select currency to convert from and to
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency from",
        choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into",
        choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//perform currency conversion formula

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount *to_amount

//display the converted amount 

console.log(chalk.yellow.italic.bold`converted amount = ${chalk.bold.green.italic(converted_amount.toFixed(2))}`);