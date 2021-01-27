const program = require('commander');
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



program.parse(process.argv);
