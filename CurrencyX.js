var Currency = {
    Euro: 0.864,
    Pound: 0.760,
    Rupee: 73.623,
    AUD: 1.405,
    CAD: 1.302,
    SAD: 1.378,
    Franc: 0.991,
    Ringgit: 3.1555,
    YenJ: 112.192,
    YenC: 6.9101
};

var readline = require('readline-sync');
var dollars = readline.question("How much money do you have: ");
console.log("You have " + dollars + "USD");

console.log("You Can Covert to these Currencies: " + Object.keys(Currency));

var readline = require('readline-sync');
var money = readline.question("What Currency Would you like to Convert to? ");
console.log("You have " + dollars*Currency[money] + " " + money);
