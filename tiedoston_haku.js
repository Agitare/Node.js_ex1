const fs = require('fs');
const chalk = require('chalk');

const data = process.argv[2];

try {
    if (data.includes('Liisa')) {
    console.log(chalk.green('Löytyi!'));
    } else {
    console.log(chalk.red('Ei löytynyt!'));
    }
} catch (e) {
console.log(chalk.red('Tiedostoa ei löytynyt!'));
}