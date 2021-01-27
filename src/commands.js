#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const {addOrder, findOrder, updateOrder, removeOrder, listOrders} = require('./index');
const {prompt} = require('inquirer');


//Customer Questions

const questions = [
    { type: 'input',
        name: 'name',
        message: 'What pizza would you like?'
    },
    { type: 'input',
        name: 'size',
        message: 'What size would you like?'
    },
    { type: 'input',
        name: 'delivery',
        message: 'Do you prefer delivery?'
    },
    { type: 'input',
        name: 'address',
        message: 'Please type in the delivery address: '
    },
]

program
    .version('1.0.0')
    .description('Order Mangement System')

// program
//     .command('buy <name> <size> <delivery> <address>')
//     .alias('b')
//     .description('Buy a pizza')
//     .action((name, size, delivery, address) => {
//         addOrder({name, size, delivery, address});
//     });

//buy command
program
    .command('buy')
    .alias('b')
    .description('Buy a pizza')
    .action(() => {
        console.log(chalk.red(figlet.textSync('Order Pizza V2',  {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 200,
            whitespaceBreak: true})));
        prompt(questions).then(answers => addOrder(answers));
    });

//find command
program
    .command('find <name>')
    .alias('f')
    .description('Find an order')
    .action(name => findOrder(name));

//update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update order')
    .action((_id) => {
        prompt(questions).then(answers => updateOrder(_id, answers));
    });

//remove command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove an order')
    .action(_id => removeOrder(_id));

//list command
program
    .command('list')
    .alias('l')
    .description('List all orders')
    .action(() => listOrders());


program.parse(process.argv);
