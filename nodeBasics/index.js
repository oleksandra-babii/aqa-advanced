import chalk from 'chalk';

const log = console.log;

console.log(chalk.blue('Hello, world!'));
console.log(chalk.green.bold('This is a green bold text'));
console.log(chalk.red.underline('Red underlined text'));
console.log(chalk.yellow.bgBlack('Yellow text on black background'));
console.log(
  chalk.hex('#FF8800')('Orange text (HEX color)')
);
console.log(
  chalk.rgb(123, 45, 67)('Text in custom RGB color')
);