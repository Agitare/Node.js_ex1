const fs = require('fs');
const chalk = require ('chalk');

var validator = require("email-validator");

const email = process.argv[2];

if (validator.validate(email)) {
    console.log(chalk.green("Kelvollinen sähköpostiosoite!"));
} else {
    console.log(chalk.red('Epäkelpo sähköpostiosoite!'));
}