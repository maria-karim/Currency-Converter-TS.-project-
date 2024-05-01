import inquirer from "inquirer";
//define the list of currencies & their exchange rate
let exchange_rate = {
    "USD": 1, //base currency
    "EUR": 0.9, // european currency(euro)
    "JYP": 113, //japenese currency(yen)
    "AUS": 1.65, //autralian dollar($)
    "CAD": 1.13, // canadian dollar($)
    "PKR": 280, // pakistani rupees 
    //add more currencies with their exchange rate here,
};
//prompt the users to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "AUS", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to  convert into",
        choices: ["USD", "EUR", "JYP", "AUS", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount 
console.log(converted_amount);
